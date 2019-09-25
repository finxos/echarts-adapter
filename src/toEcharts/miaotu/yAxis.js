import cloneDeep from 'lodash/cloneDeep';
import { trimValue } from '../../utils';

const defaultOption = {
  type: 'value',
  position: 'left',
  scale: true,
  axisLine: {
    show: true
  },
  axisTick: {
    show: true
  },
  axisLabel: {
    margin: 4,
    fontSize: 11,
    color: '#555555',
    verticalAlign: 'center',
    formatter: function(value) {
      return parseFloat(value.toFixed(4));
    }
  },
  splitLine: {},
  show: true,
  inverse: false
};
const YFormatterList = {
  K: 1000,
  M: 1000000,
  B: 1000000000
};
export function adaptYAxis(yAxisList, seriesList, background) {
  const count = yAxisList.length;
  let rightCount = 0;
  return yAxisList.map((axis, index) => {
    const option = cloneDeep(defaultOption);
    option.position = axis.position;
    if (axis.position === 'bottom' && axis.name) {
      option.position = axis.name.indexOf('Primary') >= 0 ? 'left' : 'right';
    }

    if (axis.hasOwnProperty('min')) {
      option.min = trimValue(axis.min);
    }

    if (axis.hasOwnProperty('max')) {
      option.max = trimValue(axis.max);
    }

    if (axis.hasOwnProperty('unit')) {
      option.interval = trimValue(axis.unit);
    }

    const { name: axisName } = axis;
    const relatedSeriesList = seriesList.filter(
      series => series.axisName === axisName
    );
    let hasBarSeries = false;
    relatedSeriesList.forEach(series => {
      if (series.chartType === 'bar') {
        hasBarSeries = true;
      }
    });
    option.scale = !hasBarSeries;

    if (background === 'none' || background === 'vertical') {
      option.splitLine.show = false;
    } else {
      option.splitLine.show = option.position === 'left';
      option.splitLine.lineStyle = {
        type: 'dotted'
      };
    }

    if (axis.axisLineShow === false) {
      option.axisLine.show = false;
    }

    if (axis.axisTickShow === false) {
      option.axisTick.show = false;
    }

    if (axis.axisTickInside === true) {
      option.axisTick.inside = true;
    }

    if (axis.axisLabelShow === false) {
      option.axisLabel.show = false;
    }

    if (axis.axisLabelInside === true) {
      option.axisLabel.inside = true;
    }

    if (axis.inverse) {
      option.inverse = true;
    }

    if (axis.axisLabelFormatter && axis.axisLabelFormatter != 'D') {
      option.axisLabel.formatter = function(value, index) {
        return (
          parseFloat(value.toFixed(4)) /
            YFormatterList[axis.axisLabelFormatter] +
          axis.axisLabelFormatter
        );
      };
    }

    if (
      !seriesList.find(
        seriesItem => seriesItem.axisName === axis.name && seriesItem.show
      )
    ) {
      option.show = false;
    }

    if (count > 2 && option.position == 'right' && option.show) {
      option.offset = rightCount * 25;
      rightCount++;
    }

    return option;
  });
}
