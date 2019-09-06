import union from 'lodash/union';
import sortBy from 'lodash/sortBy';
import { getBeginEndByRange } from './utils';

export function combineDate(dataList, beginDate, endDate, dataset, autoUpdate) {
  let result = [];
  dataList.forEach(sid => {
    if (!dataset[sid]) return;
    const { date } = dataset[sid].data;
    let newDate = date.filter(_d => {
      const bD = parseInt(beginDate);
      const eD = parseInt(endDate);
      if (autoUpdate) {
        return parseInt(_d) >= bD;
      }
      return parseInt(_d) >= bD && parseInt(_d) <= eD;
    });
    result = union(date, result);
  });
  return sortBy(result, d => d);
}

function getAllDateList(dataset, sidList, dateRange, autoUpdate) {
  let mergedDate = [];
  let { beginDate, endDate } = getBeginEndByRange(dateRange);
  if (beginDate !== '' && endDate !== '') {
    mergedDate = combineDate(sidList, beginDate, endDate, dataset, autoUpdate);
  }
  return mergedDate;
}

export function assembleData(
  dataset,
  sidList,
  dateRange,
  autoUpdate,
  mainField
) {
  let keyList = [];
  switch (mainField) {
    case 'date':
    default:
      keyList = getAllDateList(dataset, sidList, dateRange, autoUpdate);
  }
  const dataTable = {
    __keyList: keyList
  };
  sidList.forEach(sid => {
    const dataSetItem = dataset[sid];
    if (dataSetItem) {
      const seriesData = dataset[sid].data;
      const columns = dataset[sid].columns;
      dataTable[sid] = [];

      // TODO: nlgn
      keyList.forEach(key => {
        const _index = seriesData.date.findIndex(d => d === key);
        const row = { key };
        columns.forEach(col => {
          row[col] = _index >= 0 ? seriesData[col][_index] : null;
        });
        dataTable[sid].push(row);
      });
    }
  });
  return dataTable;
}
