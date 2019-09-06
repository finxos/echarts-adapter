import { toRGBA } from '../../utils';

function calcStackTotalValue(stackState, dataset, seriesList) {
  const sidList = [];
  stackState.children.forEach(child => {
    const seriesIdx = seriesList.findIndex(series => series.sid === child.sid);
    if (seriesIdx < 0) {
      return;
    }
    sidList.push(child.sid);
  });
  return dataset.__keyList.map((k, idx) => {
    let total = 0;
    sidList.forEach(sid => {
      const row = dataset[sid][idx];
      let val = row.value;
      if (val === null || val === undefined) {
        val = 0;
      }
      total += Number(val);
    });
    return total;
  });
}

function calcSeriesData(rawSeriesData) {
  if (!rawSeriesData || rawSeriesData.length <= 0) {
    return [];
  }
  const columns = Object.keys(rawSeriesData[0]).filter(col => col !== 'key');
  let valCol = columns[0];
  if (columns.indexOf('close') >= 0) {
    valCol = 'close';
  }

  return rawSeriesData.map(row => row[valCol]);
}

function calcStackPercent(ogData, stackTotalValues) {
  return ogData.map((val, index) => {
    const totalVal = stackTotalValues[index];
    if (totalVal === undefined) {
      return 0;
    }
    if (val === null || val === undefined) {
      val = 0;
    }
    return (val / totalVal) * 100;
  });
}

function setShowTotalValue(series, config, stackInfo) {
  if (!stackInfo || !stackInfo.children) {
    return;
  }
  const firstChildSid = stackInfo.children[0].sid;
  if (firstChildSid !== series.sid) {
    return;
  }

  const valueType = stackInfo.valueType;

  const markPointData = stackInfo.totalValues.map((val, index) => ({
    value: valueType === 'percent' ? 100 : val,
    xAxis: index,
    yAxis: valueType === 'percent' ? 100 : val
  }));

  config.markPoint = {
    symbol: 'circle',
    itemStyle: {
      color: 'rgba(0, 0, 0, 0)'
    },
    data: markPointData.filter(point => point.value !== 0),
    label: {
      fontSize: 11,
      color: '#555555',
      offset: [0, -6]
    }
  };
}

function setDataLabel(series, config) {
  const labelConfig = {
    show: true,
    fontSize: 11
  };
  if (series.chartType === 'bar' && !series.stack) {
    labelConfig.position = 'top';
    labelConfig.color = series.color;
  }
  config.label = labelConfig;
}

/**
 *
 * @param {Object} series
 * @param {string} series.chartType: 'line' | 'bar' | 'area'
 * @param {string} series.lineStyle: 'solid' | 'dotted' | 'dashed'
 * @param {string} series.lineMode: 'smooth' | 'step'
 * @param {boolean} series.showSymbol
 * @param {boolean} series.showData
 */
export default function adaptSeries(
  seriesList,
  yAxisList,
  dataset,
  stackStateItems
) {
  const stackInfoMap = {};
  if (stackStateItems) {
    stackStateItems.forEach((stackState, stackIndex) => {
      if (!stackState.children) {
        return;
      }
      const stackID = `g${stackIndex}`;
      stackInfoMap[stackID] = {
        totalValues: calcStackTotalValue(stackState, dataset, seriesList),
        valueType: stackState.valueType,
        showTotal: stackState.totalValue,
        children: stackState.children,
        barWidth: stackState.barWidth
      };
    });
  }

  return seriesList.map(series => {
    let type = series.chartType.toLowerCase();
    if (type === 'area') {
      type = 'line';
    }
    const config = {
      type,
      data: [],
      name: series.name,
      yAxisIndex: 0,
      connectNulls: true,
      lineStyle: {
        color: series.color,
        type: series.lineStyle,
        width: series.lineWidth || 2
      },
      itemStyle: {
        color: series.color
      },
      symbol: 'circle',
      showSymbol: true,
      silent: true
    };

    if (series.stack) {
      config.stack = series.stack;
    }

    if (series.lineMode === undefined) {
      config.smooth = series.smooth;
    } else if (series.lineMode === '' || series.lineMode === 'normal') {
      config.smooth = false;
    } else if (series.lineMode === 'smooth') {
      config.smooth = true;
    } else if (series.lineMode === 'step') {
      config.step = true;
      delete config.smooth;
    }

    if (!series.showSymbol) {
      config.symbolSize = 0;
    } else {
      let width = series.lineWidth || 2;
      config.symbolSize = 4 + (width - 2) * 2;
    }

    config.areaStyle = {
      opacity: series.chartType === 'area' ? 0.6 : 0
    };

    let color = series.color;
    if (type === 'bar') {
      color = toRGBA(color, 0.8);
    }
    config.lineStyle.color = config.itemStyle.color = color;

    const yAxisIndex = yAxisList.findIndex(
      axis => axis.name === series.axisName
    );
    if (yAxisIndex >= 0) {
      config.yAxisIndex = yAxisIndex;
    }

    //todo 循环耗时太多，尽量合并
    let seriesData = calcSeriesData(dataset[series.sid]);
    if (series.stack) {
      const stackInfo = stackInfoMap[series.stack];
      if (stackInfo && stackInfo.valueType === 'percent') {
        seriesData = calcStackPercent(seriesData, stackInfo.totalValues);
      }
    }
    config.data = seriesData;

    if (series.transform) {
      const ratio = series.transform.ratio || 1;
      let fractionDigits = series.transform.fractionDigits;
      if (fractionDigits === undefined) {
        fractionDigits = 4;
      }
      config.data = seriesData.map(v => {
        if (v === null) {
          return null;
        }
        if (v.hasOwnProperty('value')) {
          let aValue = v.value;
          if (aValue !== null) {
            aValue =
              series.stack &&
              stackInfoMap[series.stack] &&
              stackInfoMap[series.stack].valueType == 'percent'
                ? Number(aValue)
                : Number(aValue) * ratio;
            //aValue = parseFloat(aValue.toFixed(fractionDigits));
            aValue = aValue.toFixed(fractionDigits);
          }
          return {
            ...v,
            value: aValue
          };
        } else {
          if (v === null) {
            return null;
          }
          let _value =
            series.stack &&
            stackInfoMap[series.stack] &&
            stackInfoMap[series.stack].valueType == 'percent'
              ? Number(v)
              : Number(v) * ratio;
          //return parseFloat(_value.toFixed(fractionDigits));
          return _value.toFixed(fractionDigits);
        }
      });
    }

    if (series.showData) {
      setDataLabel(series, config);
    }

    if (series.stack) {
      const stackInfo = stackInfoMap[series.stack];
      if (stackInfo && stackInfo.showTotal) {
        setShowTotalValue(series, config, stackInfo);
      }
      if (stackInfoMap[series.stack].barWidth) {
        config.barWidth = stackInfoMap[series.stack].barWidth;
      }
    }
    if (series.connectNulls === false) {
      config.connectNulls = false;
    }

    if (type === 'bar' && series.barWidth && !series.stack) {
      config.barWidth = series.barWidth;
    }
    return config;
  });
}
