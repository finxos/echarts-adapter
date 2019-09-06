import fnsFormat from 'date-fns/format';
import getQuanter from 'date-fns/get_quarter';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';
import subYears from 'date-fns/sub_years';

export function compareFreq(freq1, freq2) {
  const freqPriority = {
    D: 1,
    W: 2,
    TD: 3,
    TW: 4,
    SM: 5,
    M: 6,
    Q: 7,
    SY: 8,
    Y: 9
  };
  let freqP1 = freqPriority[freq1];
  let freqP2 = freqPriority[freq2];
  if (!freqP1 || !freqP2) {
    throw Error(`${freq1} or ${freq2} not belong to frequency sequence`);
  }
  return freqP1 - freqP2;
}

export function minFreq(freqList) {
  let minFreq = 'Y';
  freqList.forEach(freq => {
    if (compareFreq(freq, minFreq) < 0) {
      minFreq = freq;
    }
  });
  return minFreq;
}

export function dateFormatter(date, freq) {
  if (freq === 'M') {
    return fnsFormat(date, 'YYYY-MM');
  } else if (freq === 'Q') {
    return `${getYear(date)}-Q${getQuanter(date)}`;
  } else if (freq === 'SY') {
    const month = getMonth(date);
    return `${getYear(date)}-${month < 6 ? '06' : '12'}`;
  } else if (freq === 'Y') {
    return fnsFormat(date, 'YYYY');
  }
  return fnsFormat(date, 'YYYYMMDD');
}

export function dateFormatterSpec(date, formatter) {
  if (formatter == 'YYYY/M/D') {
    return fnsFormat(date, 'YYYY/M/D');
  } else if (formatter == 'M/D') {
    return fnsFormat(date, 'M/D');
  } else if (formatter == 'MM/DD/YY') {
    return fnsFormat(date, 'MM/DD/YY');
  } else if (formatter == 'D-MMM') {
    return fnsFormat(date, 'D-MMM');
  } else if (formatter == 'YYYY-Q') {
    return `${fnsFormat(date, 'YYYY')}-Q${fnsFormat(date, 'Q')}`;
  } else if (formatter == 'YYQ') {
    return `${fnsFormat(date, 'YY')}Q${fnsFormat(date, 'Q')}`;
  } else if (formatter == 'YYYY') {
    return fnsFormat(date, 'YYYY');
  } else if (formatter == 'YY-MM') {
    return fnsFormat(date, 'YY-MM');
  } else if (formatter == 'YYYY-MM') {
    return fnsFormat(date, 'YYYY-MM');
  } else if (formatter == 'YYYYQ') {
    return `${fnsFormat(date, 'YYYY')}Q${fnsFormat(date, 'Q')}`;
  }
}

export function getBeginDate(endDate, range) {
  if (!range.hasOwnProperty('value') || !range.hasOwnProperty('unit')) {
    console.log('error');
    return '';
  }
  switch (range.unit) {
    case 'day':
      return subDays(endDate, range.value);
    case 'month':
      return subMonths(endDate, range.value);
    case 'year':
    default:
      return subYears(endDate, range.value);
  }
}

export function getBeginEndByRange(range) {
  if (range instanceof Array) {
    return {
      beginDate: range[0],
      endDate: range[1] ? range[1] : fnsFormat(Date.now(), 'YYYYMMDD')
    };
  }
  let endDate = Date.now();
  let beginDate = getBeginDate(endDate, range);
  return {
    beginDate: fnsFormat(beginDate, 'YYYYMMDD'),
    endDate: fnsFormat(endDate, 'YYYYMMDD')
  };
}

function autoSetBottomPadding(option) {
  if (!option.xAxis) {
    return;
  }

  let bottomAxis = null;
  if (option.xAxis instanceof Array) {
    bottomAxis = option.xAxis.find(
      axis => axis.position === 'bottom' || !axis.position
    );
  } else if (option.xAxis.position === 'bottom') {
    bottomAxis = option.xAxis;
  }

  if (!bottomAxis) {
    return;
  }

  let labelRotation = 0;
  const { axisLabel } = bottomAxis;
  if (axisLabel && axisLabel.hasOwnProperty('rotate')) {
    labelRotation = parseInt(axisLabel.rotate);
  }
  if (labelRotation === 90 || labelRotation === -90) {
    option.grid.bottom = 60;
  }
}

export function autoPadding(option) {
  autoSetBottomPadding(option);
}

export function trimValue(v) {
  v = parseFloat(v);
  return parseFloat(v.toFixed(12));
}

export function toRGBA(color, alpha) {
  let type = 'unknown';
  const hexReg = /^#[0-9a-fA-F]{6}$/;
  const rgbReg = /^rgb\((\d+), (\d+), (\d+)\)$/;
  if (hexReg.test(color)) {
    type = 'hex';
  } else if (rgbReg.test(color)) {
    type = 'rgb';
  }

  if (type === 'unknown') {
    return color;
  }

  let red = 0;
  let green = 0;
  let blue = 0;
  if (type === 'hex') {
    red = parseInt(color.substring(1, 3), 16);
    green = parseInt(color.substring(3, 5), 16);
    blue = parseInt(color.substring(5, 7), 16);
  } else if (type === 'rgb') {
    const re = rgbReg.exec(color);
    red = re[1];
    green = re[2];
    blue = re[3];
  }
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function isFunc(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}
