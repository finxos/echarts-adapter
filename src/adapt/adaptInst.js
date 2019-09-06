import { isFunc } from '../utils';

function trimPieTooltip(option) {
  if (!option.tooltip || !option.tooltip.formatter) {
    return;
  }
  const {formatter} = option.tooltip;
  if (typeof formatter === 'string') {
    option.tooltip.formatter = formatter.replace('<br/>', '\n')
  }
}

export default (option) => {
  option.animation = false;
  option.grid = {
    top: 20,
    bottom: 0,
    left: 10,
    right: 10,
    containLabel: true
  };

  let isPie = false;
  if (option.series && option.series[0]) {
    isPie = option.series[0].type === 'pie';
  }

  if (!isPie) {
    delete option.legend;
    delete option.tooltip;
    option.dataZoom =  [
      {
        type: 'inside',
        realtime: true,
        throttle: 100,
        filterMode: 'weakFilter',
        minValueSpan: 5
      }
    ]

    option.xAxis.forEach(axis => {
      let ogFormatter = undefined;
      if (axis.axisLabel) {
        ogFormatter = axis.axisLabel.formatter;
      }

      if (ogFormatter && !isFunc(ogFormatter)) {
        return;
      }

      axis.axisLabel.formatter = (value) => {
        if (ogFormatter) {
          value = ogFormatter(value)
        }

        const isDate = value.startsWith('2');
        if (isDate) {
          return value
        }

        if (value.length > 8) {
          value = value.substring(0, 8) + '...';
        }
        return value;
      }
    })
  } else {
    trimPieTooltip(option);
  }

  return option;
}
