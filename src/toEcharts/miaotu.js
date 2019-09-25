import { minFreq, dateFormatter, trimValue, dateFormatterSpec } from '../utils';
import { adaptYAxis } from './miaotu/yAxis';
import adaptSeries from './miaotu/series';

export default function miaotu(config, dataset, infoset) {
  let option = {};

  let { stackStateItems } = config;
  let { seriesList, yAxisList, background, xAxisList } = config.chartOption;
  seriesList = seriesList.filter(_s => _s.show);

  const xAxisLabelFormatter = undefined;
  const freq = minFreq(
    seriesList.map(_s => {
      const { sid } = _s;
      if (!infoset || !infoset[sid]) {
        return 'D';
      }
      return infoset[sid].freq;
    })
  );
  const xAxis = {
    type: 'category',
    data: dataset.__keyList,
    splitLine: {
      show: background === 'intersect' || background === 'vertical'
    },
    axisLabel: {
      show: xAxisList[0].axisLabelShow === false ? false : true,
      rotate: xAxisList[0].rotate,
      interval: xAxisList[0].axisLabelInterval === 0 ? 0 : 'auto',
      formatter: value => {
        return dateFormatter(value, freq);
        // if (
        //   xAxisList[0].axisLabelFormatter &&
        //   xAxisList[0].axisLabelFormatter != 'D'
        // ) {
        //   return dateFormatterSpec(value, xAxisList[0].axisLabelFormatter);
        // } else {
        //   return dateFormatter(value, freq);
        // }
      }
    },
    axisLine: {
      show: xAxisList[0].axisLineShow === false ? false : true
    },
    axisTick: {
      show: xAxisList[0].axisTickShow === false ? false : true,
      inside: xAxisList[0].axisTickInside === true ? true : false
    },
    boundaryGap: xAxisList[0].boundaryGap === false ? false : true
  };
  option.xAxis = [xAxis];
  option.yAxis = adaptYAxis(yAxisList, seriesList, background);
  const yAxisRightLength = option.yAxis.filter(
    yItem => yItem.show && yItem.position == 'right'
  ).length;
  option.grid = {
    left: '5%',
    right: yAxisRightLength <= 1 ? '5%' : 30 * (yAxisRightLength - 1)
  };
  option.series = adaptSeries(seriesList, yAxisList, dataset, stackStateItems);
  return option;
}
