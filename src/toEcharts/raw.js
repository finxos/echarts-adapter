import { trimValue } from '../utils';

export default function raw(option) {
  const stdOption = { ...option };
  let _isTransform = false;
  stdOption.series = option.series.map(_s => {
    if (!_s.transform) {
      return _s;
    }
    _isTransform = true;
    let transform = {
      ratio: 1,
      fractionDigits: 4
    };
    if (_s.transform && _s.transform.hasOwnProperty('ratio')) {
      transform.ratio = _s.transform.ratio;
    }
    let data = _s.data.map(v => {
      if (v === null || v === undefined) {
        return null;
      }
      let isObject = v.hasOwnProperty('value');
      let value = isObject ? v.value : v;
      if (value === '' || value === null) {
        return null;
      }
      value *= transform.ratio;
      value = parseFloat(value.toFixed(transform.fractionDigits));
      let res = isObject ? { ...v, value } : value;
      return res;
    });
    return {
      ..._s,
      data
    };
  });
  if (option.hasOwnProperty('yAxis') && _isTransform) {
    stdOption.yAxis = option.yAxis.map(axis => {
      let { min, max } = axis;
      let interval = axis.unit;
      if (min !== undefined) {
        min = trimValue(min);
      }
      if (max !== undefined) {
        max = trimValue(max);
      }
      if (interval !== undefined) {
        interval = trimValue(interval);
      }
      return {
        ...axis,
        min,
        max,
        interval
      };
    });
  }
  return stdOption;
}
