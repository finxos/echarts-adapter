import { isFunc } from '../utils';
const commonGrid = {
  top: 20,
  bottom: 0,
  left: 10,
  right: 10,
  containLabel: true
};
const dataZoom = [
  {
    type: 'inside',
    realtime: true,
    throttle: 100,
    filterMode: 'weakFilter',
    minValueSpan: 5
  }
];
function _handleOptionGrid(option) {
  option.grid = commonGrid;
  return option;
}
function _handleOptionxAxis(option) {
  option.xAxis.forEach(xAxisItem => {
    let ogFormatter = undefined;
    if (xAxisItem.axisLabel) {
      ogFormatter = xAxisItem.axisLabel.formatter;
    } else {
      xAxisItem.axisLabel = {};
    }
    if (ogFormatter && !isFunc(ogFormatter)) {
      return;
    }
    xAxisItem.axisLabel.formatter = value => {
      if (ogFormatter) {
        value = ogFormatter(value);
      }
      const isDate = typeof value == 'string' && value.startsWith('2');
      if (isDate) {
        return value;
      }

      if (value.length > 8) {
        value = value.substring(0, 8) + '...';
      }
      return value;
    };
  });
  return option;
}
function _handleOptionDataZoom(option) {
  if (
    option.series &&
    option.series[0] &&
    option.series[0].type &&
    option.series[0].type != 'pie'
  )
    option.dataZoom = dataZoom;
  return option;
}
function _handleOptionTooltip(option) {
  if (
    option.hasOwnProperty('series') &&
    option.series[0] &&
    option.series[0].type == 'pie'
  ) {
    trimPieTooltip(option);
  }
}
function _handleOption(option) {
  if (option.hasOwnProperty('options')) {
    option.options = option.options.map(optionItem => {
      _handleOptionGrid(optionItem);
      if (optionItem.hasOwnProperty('xAxis')) {
        _handleOptionxAxis(optionItem);
      }
      _handleOptionDataZoom(optionItem);
      _handleOptionTooltip(optionItem);
      return optionItem;
    });
  } else {
    _handleOptionGrid(option);
    if (option.hasOwnProperty('xAxis')) {
      _handleOptionxAxis(option);
    }
    _handleOptionDataZoom(option);
    _handleOptionTooltip(option);
  }
  return option;
}
function trimPieTooltip(option) {
  if (!option.tooltip || !option.tooltip.formatter) {
    return;
  }
  const { formatter } = option.tooltip;
  if (typeof formatter === 'string') {
    option.tooltip.formatter = formatter.replace('<br/>', '\n');
  }
}

export default option => {
  //主要用于H5，小程序，设置grid
  option.animation = false;
  delete option.legend;
  delete option.tooltip;
  delete option.title;
  option = _handleOption(option);
  // let isPie = false;
  // if (option.series && option.series[0]) {
  //   isPie = option.series[0].type === 'pie';
  // }
  //
  // if (!isPie) {
  //   //delete option.legend;
  //   //delete option.tooltip;
  //   option.dataZoom = [
  //     {
  //       type: 'inside',
  //       realtime: true,
  //       throttle: 100,
  //       filterMode: 'weakFilter',
  //       minValueSpan: 5
  //     }
  //   ];
  //
  //   option.xAxis.forEach(axis => {
  //     let ogFormatter = undefined;
  //     if (axis.axisLabel) {
  //       ogFormatter = axis.axisLabel.formatter;
  //     }
  //
  //     if (ogFormatter && !isFunc(ogFormatter)) {
  //       return;
  //     }
  //
  //     axis.axisLabel.formatter = value => {
  //       if (ogFormatter) {
  //         value = ogFormatter(value);
  //       }
  //
  //       const isDate = value.startsWith('2');
  //       if (isDate) {
  //         return value;
  //       }
  //
  //       if (value.length > 8) {
  //         value = value.substring(0, 8) + '...';
  //       }
  //       return value;
  //     };
  //   });
  // } else {
  //   trimPieTooltip(option);
  // }
  return option;
};
