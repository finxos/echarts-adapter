/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var MILLISECONDS_IN_MINUTE = 60000\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nmodule.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {\n  var date = new Date(dirtyDate.getTime())\n  var baseTimezoneOffset = date.getTimezoneOffset()\n  date.setSeconds(0, 0)\n  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE\n\n  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset\n}\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/add_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added\n * @returns {Date} the new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * var result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays (dirtyDate, dirtyAmount) {\n  var date = parse(dirtyDate)\n  var amount = Number(dirtyAmount)\n  date.setDate(date.getDate() + amount)\n  return date\n}\n\nmodule.exports = addDays\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/add_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/add_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ \"./node_modules/date-fns/get_days_in_month/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Add the specified number of months to the given date.\n *\n * @description\n * Add the specified number of months to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of months to be added\n * @returns {Date} the new date with the months added\n *\n * @example\n * // Add 5 months to 1 September 2014:\n * var result = addMonths(new Date(2014, 8, 1), 5)\n * //=> Sun Feb 01 2015 00:00:00\n */\nfunction addMonths (dirtyDate, dirtyAmount) {\n  var date = parse(dirtyDate)\n  var amount = Number(dirtyAmount)\n  var desiredMonth = date.getMonth() + amount\n  var dateWithDesiredMonth = new Date(0)\n  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)\n  dateWithDesiredMonth.setHours(0, 0, 0, 0)\n  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)\n  // Set the last day of the new month\n  // if the original date was the last day of the longer month\n  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))\n  return date\n}\n\nmodule.exports = addMonths\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/add_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/add_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_years/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var addMonths = __webpack_require__(/*! ../add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Add the specified number of years to the given date.\n *\n * @description\n * Add the specified number of years to the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of years to be added\n * @returns {Date} the new date with the years added\n *\n * @example\n * // Add 5 years to 1 September 2014:\n * var result = addYears(new Date(2014, 8, 1), 5)\n * //=> Sun Sep 01 2019 00:00:00\n */\nfunction addYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMonths(dirtyDate, amount * 12)\n}\n\nmodule.exports = addYears\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/add_years/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ \"./node_modules/date-fns/start_of_day/index.js\")\n\nvar MILLISECONDS_IN_MINUTE = 60000\nvar MILLISECONDS_IN_DAY = 86400000\n\n/**\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates.\n *\n * @param {Date|String|Number} dateLeft - the later date\n * @param {Date|String|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar days\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * var result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n */\nfunction differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {\n  var startOfDayLeft = startOfDay(dirtyDateLeft)\n  var startOfDayRight = startOfDay(dirtyDateRight)\n\n  var timestampLeft = startOfDayLeft.getTime() -\n    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n  var timestampRight = startOfDayRight.getTime() -\n    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a day is not constant\n  // (e.g. it's different in the day of the daylight saving time clock shift)\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)\n}\n\nmodule.exports = differenceInCalendarDays\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/difference_in_calendar_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getDayOfYear = __webpack_require__(/*! ../get_day_of_year/index.js */ \"./node_modules/date-fns/get_day_of_year/index.js\")\nvar getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ \"./node_modules/date-fns/get_iso_week/index.js\")\nvar getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar isValid = __webpack_require__(/*! ../is_valid/index.js */ \"./node_modules/date-fns/is_valid/index.js\")\nvar enLocale = __webpack_require__(/*! ../locale/en/index.js */ \"./node_modules/date-fns/locale/en/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format.\n *\n * Accepted tokens:\n * | Unit                    | Token | Result examples                  |\n * |-------------------------|-------|----------------------------------|\n * | Month                   | M     | 1, 2, ..., 12                    |\n * |                         | Mo    | 1st, 2nd, ..., 12th              |\n * |                         | MM    | 01, 02, ..., 12                  |\n * |                         | MMM   | Jan, Feb, ..., Dec               |\n * |                         | MMMM  | January, February, ..., December |\n * | Quarter                 | Q     | 1, 2, 3, 4                       |\n * |                         | Qo    | 1st, 2nd, 3rd, 4th               |\n * | Day of month            | D     | 1, 2, ..., 31                    |\n * |                         | Do    | 1st, 2nd, ..., 31st              |\n * |                         | DD    | 01, 02, ..., 31                  |\n * | Day of year             | DDD   | 1, 2, ..., 366                   |\n * |                         | DDDo  | 1st, 2nd, ..., 366th             |\n * |                         | DDDD  | 001, 002, ..., 366               |\n * | Day of week             | d     | 0, 1, ..., 6                     |\n * |                         | do    | 0th, 1st, ..., 6th               |\n * |                         | dd    | Su, Mo, ..., Sa                  |\n * |                         | ddd   | Sun, Mon, ..., Sat               |\n * |                         | dddd  | Sunday, Monday, ..., Saturday    |\n * | Day of ISO week         | E     | 1, 2, ..., 7                     |\n * | ISO week                | W     | 1, 2, ..., 53                    |\n * |                         | Wo    | 1st, 2nd, ..., 53rd              |\n * |                         | WW    | 01, 02, ..., 53                  |\n * | Year                    | YY    | 00, 01, ..., 99                  |\n * |                         | YYYY  | 1900, 1901, ..., 2099            |\n * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |\n * |                         | GGGG  | 1900, 1901, ..., 2099            |\n * | AM/PM                   | A     | AM, PM                           |\n * |                         | a     | am, pm                           |\n * |                         | aa    | a.m., p.m.                       |\n * | Hour                    | H     | 0, 1, ... 23                     |\n * |                         | HH    | 00, 01, ... 23                   |\n * |                         | h     | 1, 2, ..., 12                    |\n * |                         | hh    | 01, 02, ..., 12                  |\n * | Minute                  | m     | 0, 1, ..., 59                    |\n * |                         | mm    | 00, 01, ..., 59                  |\n * | Second                  | s     | 0, 1, ..., 59                    |\n * |                         | ss    | 00, 01, ..., 59                  |\n * | 1/10 of second          | S     | 0, 1, ..., 9                     |\n * | 1/100 of second         | SS    | 00, 01, ..., 99                  |\n * | Millisecond             | SSS   | 000, 001, ..., 999               |\n * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |\n * |                         | ZZ    | -0100, +0000, ..., +1200         |\n * | Seconds timestamp       | X     | 512969520                        |\n * | Milliseconds timestamp  | x     | 512969520900                     |\n *\n * The characters wrapped in square brackets are escaped.\n *\n * The result may vary by locale.\n *\n * @param {Date|String|Number} date - the original date\n * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens\n * @param {Object} [options] - the object with options\n * @param {Object} [options.locale=enLocale] - the locale object\n * @returns {String} the formatted date string\n *\n * @example\n * // Represent 11 February 2014 in middle-endian format:\n * var result = format(\n *   new Date(2014, 1, 11),\n *   'MM/DD/YYYY'\n * )\n * //=> '02/11/2014'\n *\n * @example\n * // Represent 2 July 2014 in Esperanto:\n * var eoLocale = require('date-fns/locale/eo')\n * var result = format(\n *   new Date(2014, 6, 2),\n *   'Do [de] MMMM YYYY',\n *   {locale: eoLocale}\n * )\n * //=> '2-a de julio 2014'\n */\nfunction format (dirtyDate, dirtyFormatStr, dirtyOptions) {\n  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'\n  var options = dirtyOptions || {}\n\n  var locale = options.locale\n  var localeFormatters = enLocale.format.formatters\n  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp\n  if (locale && locale.format && locale.format.formatters) {\n    localeFormatters = locale.format.formatters\n\n    if (locale.format.formattingTokensRegExp) {\n      formattingTokensRegExp = locale.format.formattingTokensRegExp\n    }\n  }\n\n  var date = parse(dirtyDate)\n\n  if (!isValid(date)) {\n    return 'Invalid Date'\n  }\n\n  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)\n\n  return formatFn(date)\n}\n\nvar formatters = {\n  // Month: 1, 2, ..., 12\n  'M': function (date) {\n    return date.getMonth() + 1\n  },\n\n  // Month: 01, 02, ..., 12\n  'MM': function (date) {\n    return addLeadingZeros(date.getMonth() + 1, 2)\n  },\n\n  // Quarter: 1, 2, 3, 4\n  'Q': function (date) {\n    return Math.ceil((date.getMonth() + 1) / 3)\n  },\n\n  // Day of month: 1, 2, ..., 31\n  'D': function (date) {\n    return date.getDate()\n  },\n\n  // Day of month: 01, 02, ..., 31\n  'DD': function (date) {\n    return addLeadingZeros(date.getDate(), 2)\n  },\n\n  // Day of year: 1, 2, ..., 366\n  'DDD': function (date) {\n    return getDayOfYear(date)\n  },\n\n  // Day of year: 001, 002, ..., 366\n  'DDDD': function (date) {\n    return addLeadingZeros(getDayOfYear(date), 3)\n  },\n\n  // Day of week: 0, 1, ..., 6\n  'd': function (date) {\n    return date.getDay()\n  },\n\n  // Day of ISO week: 1, 2, ..., 7\n  'E': function (date) {\n    return date.getDay() || 7\n  },\n\n  // ISO week: 1, 2, ..., 53\n  'W': function (date) {\n    return getISOWeek(date)\n  },\n\n  // ISO week: 01, 02, ..., 53\n  'WW': function (date) {\n    return addLeadingZeros(getISOWeek(date), 2)\n  },\n\n  // Year: 00, 01, ..., 99\n  'YY': function (date) {\n    return addLeadingZeros(date.getFullYear(), 4).substr(2)\n  },\n\n  // Year: 1900, 1901, ..., 2099\n  'YYYY': function (date) {\n    return addLeadingZeros(date.getFullYear(), 4)\n  },\n\n  // ISO week-numbering year: 00, 01, ..., 99\n  'GG': function (date) {\n    return String(getISOYear(date)).substr(2)\n  },\n\n  // ISO week-numbering year: 1900, 1901, ..., 2099\n  'GGGG': function (date) {\n    return getISOYear(date)\n  },\n\n  // Hour: 0, 1, ... 23\n  'H': function (date) {\n    return date.getHours()\n  },\n\n  // Hour: 00, 01, ..., 23\n  'HH': function (date) {\n    return addLeadingZeros(date.getHours(), 2)\n  },\n\n  // Hour: 1, 2, ..., 12\n  'h': function (date) {\n    var hours = date.getHours()\n    if (hours === 0) {\n      return 12\n    } else if (hours > 12) {\n      return hours % 12\n    } else {\n      return hours\n    }\n  },\n\n  // Hour: 01, 02, ..., 12\n  'hh': function (date) {\n    return addLeadingZeros(formatters['h'](date), 2)\n  },\n\n  // Minute: 0, 1, ..., 59\n  'm': function (date) {\n    return date.getMinutes()\n  },\n\n  // Minute: 00, 01, ..., 59\n  'mm': function (date) {\n    return addLeadingZeros(date.getMinutes(), 2)\n  },\n\n  // Second: 0, 1, ..., 59\n  's': function (date) {\n    return date.getSeconds()\n  },\n\n  // Second: 00, 01, ..., 59\n  'ss': function (date) {\n    return addLeadingZeros(date.getSeconds(), 2)\n  },\n\n  // 1/10 of second: 0, 1, ..., 9\n  'S': function (date) {\n    return Math.floor(date.getMilliseconds() / 100)\n  },\n\n  // 1/100 of second: 00, 01, ..., 99\n  'SS': function (date) {\n    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)\n  },\n\n  // Millisecond: 000, 001, ..., 999\n  'SSS': function (date) {\n    return addLeadingZeros(date.getMilliseconds(), 3)\n  },\n\n  // Timezone: -01:00, +00:00, ... +12:00\n  'Z': function (date) {\n    return formatTimezone(date.getTimezoneOffset(), ':')\n  },\n\n  // Timezone: -0100, +0000, ... +1200\n  'ZZ': function (date) {\n    return formatTimezone(date.getTimezoneOffset())\n  },\n\n  // Seconds timestamp: 512969520\n  'X': function (date) {\n    return Math.floor(date.getTime() / 1000)\n  },\n\n  // Milliseconds timestamp: 512969520900\n  'x': function (date) {\n    return date.getTime()\n  }\n}\n\nfunction buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {\n  var array = formatStr.match(formattingTokensRegExp)\n  var length = array.length\n\n  var i\n  var formatter\n  for (i = 0; i < length; i++) {\n    formatter = localeFormatters[array[i]] || formatters[array[i]]\n    if (formatter) {\n      array[i] = formatter\n    } else {\n      array[i] = removeFormattingTokens(array[i])\n    }\n  }\n\n  return function (date) {\n    var output = ''\n    for (var i = 0; i < length; i++) {\n      if (array[i] instanceof Function) {\n        output += array[i](date, formatters)\n      } else {\n        output += array[i]\n      }\n    }\n    return output\n  }\n}\n\nfunction removeFormattingTokens (input) {\n  if (input.match(/\\[[\\s\\S]/)) {\n    return input.replace(/^\\[|]$/g, '')\n  }\n  return input.replace(/\\\\/g, '')\n}\n\nfunction formatTimezone (offset, delimeter) {\n  delimeter = delimeter || ''\n  var sign = offset > 0 ? '-' : '+'\n  var absOffset = Math.abs(offset)\n  var hours = Math.floor(absOffset / 60)\n  var minutes = absOffset % 60\n  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)\n}\n\nfunction addLeadingZeros (number, targetLength) {\n  var output = Math.abs(number).toString()\n  while (output.length < targetLength) {\n    output = '0' + output\n  }\n  return output\n}\n\nmodule.exports = format\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/format/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfYear = __webpack_require__(/*! ../start_of_year/index.js */ \"./node_modules/date-fns/start_of_year/index.js\")\nvar differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ \"./node_modules/date-fns/difference_in_calendar_days/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Get the day of the year of the given date.\n *\n * @description\n * Get the day of the year of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the day of year\n *\n * @example\n * // Which day of the year is 2 July 2014?\n * var result = getDayOfYear(new Date(2014, 6, 2))\n * //=> 183\n */\nfunction getDayOfYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var diff = differenceInCalendarDays(date, startOfYear(date))\n  var dayOfYear = diff + 1\n  return dayOfYear\n}\n\nmodule.exports = getDayOfYear\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_day_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the number of days in a month of the given date.\n *\n * @description\n * Get the number of days in a month of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the number of days in a month\n *\n * @example\n * // How many days are in February 2000?\n * var result = getDaysInMonth(new Date(2000, 1))\n * //=> 29\n */\nfunction getDaysInMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  var monthIndex = date.getMonth()\n  var lastDayOfMonth = new Date(0)\n  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)\n  lastDayOfMonth.setHours(0, 0, 0, 0)\n  return lastDayOfMonth.getDate()\n}\n\nmodule.exports = getDaysInMonth\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_days_in_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\nvar startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ \"./node_modules/date-fns/start_of_iso_year/index.js\")\n\nvar MILLISECONDS_IN_WEEK = 604800000\n\n/**\n * @category ISO Week Helpers\n * @summary Get the ISO week of the given date.\n *\n * @description\n * Get the ISO week of the given date.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the ISO week\n *\n * @example\n * // Which week of the ISO-week numbering year is 2 January 2005?\n * var result = getISOWeek(new Date(2005, 0, 2))\n * //=> 53\n */\nfunction getISOWeek (dirtyDate) {\n  var date = parse(dirtyDate)\n  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it's different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1\n}\n\nmodule.exports = getISOWeek\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Get the ISO week-numbering year of the given date.\n *\n * @description\n * Get the ISO week-numbering year of the given date,\n * which always starts 3 days before the year's first Thursday.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the ISO week-numbering year\n *\n * @example\n * // Which ISO-week numbering year is 2 January 2005?\n * var result = getISOYear(new Date(2005, 0, 2))\n * //=> 2004\n */\nfunction getISOYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n\n  var fourthOfJanuaryOfNextYear = new Date(0)\n  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)\n  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)\n  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)\n\n  var fourthOfJanuaryOfThisYear = new Date(0)\n  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)\n  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)\n  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)\n\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year\n  } else {\n    return year - 1\n  }\n}\n\nmodule.exports = getISOYear\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_month/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Get the month of the given date.\n *\n * @description\n * Get the month of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the month\n *\n * @example\n * // Which month is 29 February 2012?\n * var result = getMonth(new Date(2012, 1, 29))\n * //=> 1\n */\nfunction getMonth (dirtyDate) {\n  var date = parse(dirtyDate)\n  var month = date.getMonth()\n  return month\n}\n\nmodule.exports = getMonth\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_month/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_quarter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_quarter/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Quarter Helpers\n * @summary Get the year quarter of the given date.\n *\n * @description\n * Get the year quarter of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the quarter\n *\n * @example\n * // Which quarter is 2 July 2014?\n * var result = getQuarter(new Date(2014, 6, 2))\n * //=> 3\n */\nfunction getQuarter (dirtyDate) {\n  var date = parse(dirtyDate)\n  var quarter = Math.floor(date.getMonth() / 3) + 1\n  return quarter\n}\n\nmodule.exports = getQuarter\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_quarter/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/get_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_year/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Get the year of the given date.\n *\n * @description\n * Get the year of the given date.\n *\n * @param {Date|String|Number} date - the given date\n * @returns {Number} the year\n *\n * @example\n * // Which year is 2 July 2014?\n * var result = getYear(new Date(2014, 6, 2))\n * //=> 2014\n */\nfunction getYear (dirtyDate) {\n  var date = parse(dirtyDate)\n  var year = date.getFullYear()\n  return year\n}\n\nmodule.exports = getYear\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/get_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @category Common Helpers\n * @summary Is the given argument an instance of Date?\n *\n * @description\n * Is the given argument an instance of Date?\n *\n * @param {*} argument - the argument to check\n * @returns {Boolean} the given argument is an instance of Date\n *\n * @example\n * // Is 'mayonnaise' a Date?\n * var result = isDate('mayonnaise')\n * //=> false\n */\nfunction isDate (argument) {\n  return argument instanceof Date\n}\n\nmodule.exports = isDate\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/is_date/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_valid/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isDate = __webpack_require__(/*! ../is_date/index.js */ \"./node_modules/date-fns/is_date/index.js\")\n\n/**\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @param {Date} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} argument must be an instance of Date\n *\n * @example\n * // For the valid date:\n * var result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the invalid date:\n * var result = isValid(new Date(''))\n * //=> false\n */\nfunction isValid (dirtyDate) {\n  if (isDate(dirtyDate)) {\n    return !isNaN(dirtyDate)\n  } else {\n    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')\n  }\n}\n\nmodule.exports = isValid\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/is_valid/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var commonFormatterKeys = [\n  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',\n  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',\n  'H', 'HH', 'h', 'hh', 'm', 'mm',\n  's', 'ss', 'S', 'SS', 'SSS',\n  'Z', 'ZZ', 'X', 'x'\n]\n\nfunction buildFormattingTokensRegExp (formatters) {\n  var formatterKeys = []\n  for (var key in formatters) {\n    if (formatters.hasOwnProperty(key)) {\n      formatterKeys.push(key)\n    }\n  }\n\n  var formattingTokens = commonFormatterKeys\n    .concat(formatterKeys)\n    .sort()\n    .reverse()\n  var formattingTokensRegExp = new RegExp(\n    '(\\\\[[^\\\\[]*\\\\])|(\\\\\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'\n  )\n\n  return formattingTokensRegExp\n}\n\nmodule.exports = buildFormattingTokensRegExp\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function buildDistanceInWordsLocale () {\n  var distanceInWordsLocale = {\n    lessThanXSeconds: {\n      one: 'less than a second',\n      other: 'less than {{count}} seconds'\n    },\n\n    xSeconds: {\n      one: '1 second',\n      other: '{{count}} seconds'\n    },\n\n    halfAMinute: 'half a minute',\n\n    lessThanXMinutes: {\n      one: 'less than a minute',\n      other: 'less than {{count}} minutes'\n    },\n\n    xMinutes: {\n      one: '1 minute',\n      other: '{{count}} minutes'\n    },\n\n    aboutXHours: {\n      one: 'about 1 hour',\n      other: 'about {{count}} hours'\n    },\n\n    xHours: {\n      one: '1 hour',\n      other: '{{count}} hours'\n    },\n\n    xDays: {\n      one: '1 day',\n      other: '{{count}} days'\n    },\n\n    aboutXMonths: {\n      one: 'about 1 month',\n      other: 'about {{count}} months'\n    },\n\n    xMonths: {\n      one: '1 month',\n      other: '{{count}} months'\n    },\n\n    aboutXYears: {\n      one: 'about 1 year',\n      other: 'about {{count}} years'\n    },\n\n    xYears: {\n      one: '1 year',\n      other: '{{count}} years'\n    },\n\n    overXYears: {\n      one: 'over 1 year',\n      other: 'over {{count}} years'\n    },\n\n    almostXYears: {\n      one: 'almost 1 year',\n      other: 'almost {{count}} years'\n    }\n  }\n\n  function localize (token, count, options) {\n    options = options || {}\n\n    var result\n    if (typeof distanceInWordsLocale[token] === 'string') {\n      result = distanceInWordsLocale[token]\n    } else if (count === 1) {\n      result = distanceInWordsLocale[token].one\n    } else {\n      result = distanceInWordsLocale[token].other.replace('{{count}}', count)\n    }\n\n    if (options.addSuffix) {\n      if (options.comparison > 0) {\n        return 'in ' + result\n      } else {\n        return result + ' ago'\n      }\n    }\n\n    return result\n  }\n\n  return {\n    localize: localize\n  }\n}\n\nmodule.exports = buildDistanceInWordsLocale\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var buildFormattingTokensRegExp = __webpack_require__(/*! ../../_lib/build_formatting_tokens_reg_exp/index.js */ \"./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js\")\n\nfunction buildFormatLocale () {\n  // Note: in English, the names of days of the week and months are capitalized.\n  // If you are making a new locale based on this one, check if the same is true for the language you're working on.\n  // Generally, formatted dates should look like they are in the middle of a sentence,\n  // e.g. in Spanish language the weekdays and months should be in the lowercase.\n  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']\n  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n  var meridiemUppercase = ['AM', 'PM']\n  var meridiemLowercase = ['am', 'pm']\n  var meridiemFull = ['a.m.', 'p.m.']\n\n  var formatters = {\n    // Month: Jan, Feb, ..., Dec\n    'MMM': function (date) {\n      return months3char[date.getMonth()]\n    },\n\n    // Month: January, February, ..., December\n    'MMMM': function (date) {\n      return monthsFull[date.getMonth()]\n    },\n\n    // Day of week: Su, Mo, ..., Sa\n    'dd': function (date) {\n      return weekdays2char[date.getDay()]\n    },\n\n    // Day of week: Sun, Mon, ..., Sat\n    'ddd': function (date) {\n      return weekdays3char[date.getDay()]\n    },\n\n    // Day of week: Sunday, Monday, ..., Saturday\n    'dddd': function (date) {\n      return weekdaysFull[date.getDay()]\n    },\n\n    // AM, PM\n    'A': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]\n    },\n\n    // am, pm\n    'a': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]\n    },\n\n    // a.m., p.m.\n    'aa': function (date) {\n      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]\n    }\n  }\n\n  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.\n  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']\n  ordinalFormatters.forEach(function (formatterToken) {\n    formatters[formatterToken + 'o'] = function (date, formatters) {\n      return ordinal(formatters[formatterToken](date))\n    }\n  })\n\n  return {\n    formatters: formatters,\n    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)\n  }\n}\n\nfunction ordinal (number) {\n  var rem100 = number % 100\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st'\n      case 2:\n        return number + 'nd'\n      case 3:\n        return number + 'rd'\n    }\n  }\n  return number + 'th'\n}\n\nmodule.exports = buildFormatLocale\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/locale/en/build_format_locale/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/en/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var buildDistanceInWordsLocale = __webpack_require__(/*! ./build_distance_in_words_locale/index.js */ \"./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js\")\nvar buildFormatLocale = __webpack_require__(/*! ./build_format_locale/index.js */ \"./node_modules/date-fns/locale/en/build_format_locale/index.js\")\n\n/**\n * @category Locales\n * @summary English locale.\n */\nmodule.exports = {\n  distanceInWords: buildDistanceInWordsLocale(),\n  format: buildFormatLocale()\n}\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/locale/en/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTimezoneOffsetInMilliseconds = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js\")\nvar isDate = __webpack_require__(/*! ../is_date/index.js */ \"./node_modules/date-fns/is_date/index.js\")\n\nvar MILLISECONDS_IN_HOUR = 3600000\nvar MILLISECONDS_IN_MINUTE = 60000\nvar DEFAULT_ADDITIONAL_DIGITS = 2\n\nvar parseTokenDateTimeDelimeter = /[T ]/\nvar parseTokenPlainTime = /:/\n\n// year tokens\nvar parseTokenYY = /^(\\d{2})$/\nvar parseTokensYYY = [\n  /^([+-]\\d{2})$/, // 0 additional digits\n  /^([+-]\\d{3})$/, // 1 additional digit\n  /^([+-]\\d{4})$/ // 2 additional digits\n]\n\nvar parseTokenYYYY = /^(\\d{4})/\nvar parseTokensYYYYY = [\n  /^([+-]\\d{4})/, // 0 additional digits\n  /^([+-]\\d{5})/, // 1 additional digit\n  /^([+-]\\d{6})/ // 2 additional digits\n]\n\n// date tokens\nvar parseTokenMM = /^-(\\d{2})$/\nvar parseTokenDDD = /^-?(\\d{3})$/\nvar parseTokenMMDD = /^-?(\\d{2})-?(\\d{2})$/\nvar parseTokenWww = /^-?W(\\d{2})$/\nvar parseTokenWwwD = /^-?W(\\d{2})-?(\\d{1})$/\n\n// time tokens\nvar parseTokenHH = /^(\\d{2}([.,]\\d*)?)$/\nvar parseTokenHHMM = /^(\\d{2}):?(\\d{2}([.,]\\d*)?)$/\nvar parseTokenHHMMSS = /^(\\d{2}):?(\\d{2}):?(\\d{2}([.,]\\d*)?)$/\n\n// timezone tokens\nvar parseTokenTimezone = /([Z+-].*)$/\nvar parseTokenTimezoneZ = /^(Z)$/\nvar parseTokenTimezoneHH = /^([+-])(\\d{2})$/\nvar parseTokenTimezoneHHMM = /^([+-])(\\d{2}):?(\\d{2})$/\n\n/**\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If an argument is a string, the function tries to parse it.\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If all above fails, the function passes the given argument to Date constructor.\n *\n * @param {Date|String|Number} argument - the value to convert\n * @param {Object} [options] - the object with options\n * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * var result = parse('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Parse string '+02014101',\n * // if the additional number of digits in the extended year format is 1:\n * var result = parse('+02014101', {additionalDigits: 1})\n * //=> Fri Apr 11 2014 00:00:00\n */\nfunction parse (argument, dirtyOptions) {\n  if (isDate(argument)) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime())\n  } else if (typeof argument !== 'string') {\n    return new Date(argument)\n  }\n\n  var options = dirtyOptions || {}\n  var additionalDigits = options.additionalDigits\n  if (additionalDigits == null) {\n    additionalDigits = DEFAULT_ADDITIONAL_DIGITS\n  } else {\n    additionalDigits = Number(additionalDigits)\n  }\n\n  var dateStrings = splitDateString(argument)\n\n  var parseYearResult = parseYear(dateStrings.date, additionalDigits)\n  var year = parseYearResult.year\n  var restDateString = parseYearResult.restDateString\n\n  var date = parseDate(restDateString, year)\n\n  if (date) {\n    var timestamp = date.getTime()\n    var time = 0\n    var offset\n\n    if (dateStrings.time) {\n      time = parseTime(dateStrings.time)\n    }\n\n    if (dateStrings.timezone) {\n      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE\n    } else {\n      var fullTime = timestamp + time\n      var fullTimeDate = new Date(fullTime)\n\n      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)\n\n      // Adjust time when it's coming from DST\n      var fullTimeDateNextDay = new Date(fullTime)\n      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)\n      var offsetDiff =\n        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -\n        getTimezoneOffsetInMilliseconds(fullTimeDate)\n      if (offsetDiff > 0) {\n        offset += offsetDiff\n      }\n    }\n\n    return new Date(timestamp + time + offset)\n  } else {\n    return new Date(argument)\n  }\n}\n\nfunction splitDateString (dateString) {\n  var dateStrings = {}\n  var array = dateString.split(parseTokenDateTimeDelimeter)\n  var timeString\n\n  if (parseTokenPlainTime.test(array[0])) {\n    dateStrings.date = null\n    timeString = array[0]\n  } else {\n    dateStrings.date = array[0]\n    timeString = array[1]\n  }\n\n  if (timeString) {\n    var token = parseTokenTimezone.exec(timeString)\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '')\n      dateStrings.timezone = token[1]\n    } else {\n      dateStrings.time = timeString\n    }\n  }\n\n  return dateStrings\n}\n\nfunction parseYear (dateString, additionalDigits) {\n  var parseTokenYYY = parseTokensYYY[additionalDigits]\n  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]\n\n  var token\n\n  // YYYY or ±YYYYY\n  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)\n  if (token) {\n    var yearString = token[1]\n    return {\n      year: parseInt(yearString, 10),\n      restDateString: dateString.slice(yearString.length)\n    }\n  }\n\n  // YY or ±YYY\n  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)\n  if (token) {\n    var centuryString = token[1]\n    return {\n      year: parseInt(centuryString, 10) * 100,\n      restDateString: dateString.slice(centuryString.length)\n    }\n  }\n\n  // Invalid ISO-formatted year\n  return {\n    year: null\n  }\n}\n\nfunction parseDate (dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) {\n    return null\n  }\n\n  var token\n  var date\n  var month\n  var week\n\n  // YYYY\n  if (dateString.length === 0) {\n    date = new Date(0)\n    date.setUTCFullYear(year)\n    return date\n  }\n\n  // YYYY-MM\n  token = parseTokenMM.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    month = parseInt(token[1], 10) - 1\n    date.setUTCFullYear(year, month)\n    return date\n  }\n\n  // YYYY-DDD or YYYYDDD\n  token = parseTokenDDD.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    var dayOfYear = parseInt(token[1], 10)\n    date.setUTCFullYear(year, 0, dayOfYear)\n    return date\n  }\n\n  // YYYY-MM-DD or YYYYMMDD\n  token = parseTokenMMDD.exec(dateString)\n  if (token) {\n    date = new Date(0)\n    month = parseInt(token[1], 10) - 1\n    var day = parseInt(token[2], 10)\n    date.setUTCFullYear(year, month, day)\n    return date\n  }\n\n  // YYYY-Www or YYYYWww\n  token = parseTokenWww.exec(dateString)\n  if (token) {\n    week = parseInt(token[1], 10) - 1\n    return dayOfISOYear(year, week)\n  }\n\n  // YYYY-Www-D or YYYYWwwD\n  token = parseTokenWwwD.exec(dateString)\n  if (token) {\n    week = parseInt(token[1], 10) - 1\n    var dayOfWeek = parseInt(token[2], 10) - 1\n    return dayOfISOYear(year, week, dayOfWeek)\n  }\n\n  // Invalid ISO-formatted date\n  return null\n}\n\nfunction parseTime (timeString) {\n  var token\n  var hours\n  var minutes\n\n  // hh\n  token = parseTokenHH.exec(timeString)\n  if (token) {\n    hours = parseFloat(token[1].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR\n  }\n\n  // hh:mm or hhmm\n  token = parseTokenHHMM.exec(timeString)\n  if (token) {\n    hours = parseInt(token[1], 10)\n    minutes = parseFloat(token[2].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR +\n      minutes * MILLISECONDS_IN_MINUTE\n  }\n\n  // hh:mm:ss or hhmmss\n  token = parseTokenHHMMSS.exec(timeString)\n  if (token) {\n    hours = parseInt(token[1], 10)\n    minutes = parseInt(token[2], 10)\n    var seconds = parseFloat(token[3].replace(',', '.'))\n    return (hours % 24) * MILLISECONDS_IN_HOUR +\n      minutes * MILLISECONDS_IN_MINUTE +\n      seconds * 1000\n  }\n\n  // Invalid ISO-formatted time\n  return null\n}\n\nfunction parseTimezone (timezoneString) {\n  var token\n  var absoluteOffset\n\n  // Z\n  token = parseTokenTimezoneZ.exec(timezoneString)\n  if (token) {\n    return 0\n  }\n\n  // ±hh\n  token = parseTokenTimezoneHH.exec(timezoneString)\n  if (token) {\n    absoluteOffset = parseInt(token[2], 10) * 60\n    return (token[1] === '+') ? -absoluteOffset : absoluteOffset\n  }\n\n  // ±hh:mm or ±hhmm\n  token = parseTokenTimezoneHHMM.exec(timezoneString)\n  if (token) {\n    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)\n    return (token[1] === '+') ? -absoluteOffset : absoluteOffset\n  }\n\n  return 0\n}\n\nfunction dayOfISOYear (isoYear, week, day) {\n  week = week || 0\n  day = day || 0\n  var date = new Date(0)\n  date.setUTCFullYear(isoYear, 0, 4)\n  var fourthOfJanuaryDay = date.getUTCDay() || 7\n  var diff = week * 7 + day + 1 - fourthOfJanuaryDay\n  date.setUTCDate(date.getUTCDate() + diff)\n  return date\n}\n\nmodule.exports = parse\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/parse/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay (dirtyDate) {\n  var date = parse(dirtyDate)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfDay\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/start_of_day/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ \"./node_modules/date-fns/start_of_week/index.js\")\n\n/**\n * @category ISO Week Helpers\n * @summary Return the start of an ISO week for the given date.\n *\n * @description\n * Return the start of an ISO week for the given date.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of an ISO week\n *\n * @example\n * // The start of an ISO week for 2 September 2014 11:55:00:\n * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfISOWeek (dirtyDate) {\n  return startOfWeek(dirtyDate, {weekStartsOn: 1})\n}\n\nmodule.exports = startOfISOWeek\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/start_of_iso_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ \"./node_modules/date-fns/get_iso_year/index.js\")\nvar startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ \"./node_modules/date-fns/start_of_iso_week/index.js\")\n\n/**\n * @category ISO Week-Numbering Year Helpers\n * @summary Return the start of an ISO week-numbering year for the given date.\n *\n * @description\n * Return the start of an ISO week-numbering year,\n * which always starts 3 days before the year's first Thursday.\n * The result will be in the local timezone.\n *\n * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of an ISO year\n *\n * @example\n * // The start of an ISO week-numbering year for 2 July 2005:\n * var result = startOfISOYear(new Date(2005, 6, 2))\n * //=> Mon Jan 03 2005 00:00:00\n */\nfunction startOfISOYear (dirtyDate) {\n  var year = getISOYear(dirtyDate)\n  var fourthOfJanuary = new Date(0)\n  fourthOfJanuary.setFullYear(year, 0, 4)\n  fourthOfJanuary.setHours(0, 0, 0, 0)\n  var date = startOfISOWeek(fourthOfJanuary)\n  return date\n}\n\nmodule.exports = startOfISOYear\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/start_of_iso_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @param {Object} [options] - the object with options\n * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek (dirtyDate, dirtyOptions) {\n  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0\n\n  var date = parse(dirtyDate)\n  var day = date.getDay()\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn\n\n  date.setDate(date.getDate() - diff)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfWeek\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/start_of_week/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_year/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parse = __webpack_require__(/*! ../parse/index.js */ \"./node_modules/date-fns/parse/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Return the start of a year for the given date.\n *\n * @description\n * Return the start of a year for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|String|Number} date - the original date\n * @returns {Date} the start of a year\n *\n * @example\n * // The start of a year for 2 September 2014 11:55:00:\n * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))\n * //=> Wed Jan 01 2014 00:00:00\n */\nfunction startOfYear (dirtyDate) {\n  var cleanDate = parse(dirtyDate)\n  var date = new Date(0)\n  date.setFullYear(cleanDate.getFullYear(), 0, 1)\n  date.setHours(0, 0, 0, 0)\n  return date\n}\n\nmodule.exports = startOfYear\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/start_of_year/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/sub_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var addDays = __webpack_require__(/*! ../add_days/index.js */ \"./node_modules/date-fns/add_days/index.js\")\n\n/**\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be subtracted\n * @returns {Date} the new date with the days subtracted\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * var result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\nfunction subDays (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addDays(dirtyDate, -amount)\n}\n\nmodule.exports = subDays\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/sub_days/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/sub_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var addMonths = __webpack_require__(/*! ../add_months/index.js */ \"./node_modules/date-fns/add_months/index.js\")\n\n/**\n * @category Month Helpers\n * @summary Subtract the specified number of months from the given date.\n *\n * @description\n * Subtract the specified number of months from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of months to be subtracted\n * @returns {Date} the new date with the months subtracted\n *\n * @example\n * // Subtract 5 months from 1 February 2015:\n * var result = subMonths(new Date(2015, 1, 1), 5)\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction subMonths (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addMonths(dirtyDate, -amount)\n}\n\nmodule.exports = subMonths\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/sub_months/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/sub_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_years/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var addYears = __webpack_require__(/*! ../add_years/index.js */ \"./node_modules/date-fns/add_years/index.js\")\n\n/**\n * @category Year Helpers\n * @summary Subtract the specified number of years from the given date.\n *\n * @description\n * Subtract the specified number of years from the given date.\n *\n * @param {Date|String|Number} date - the date to be changed\n * @param {Number} amount - the amount of years to be subtracted\n * @returns {Date} the new date with the years subtracted\n *\n * @example\n * // Subtract 5 years from 1 September 2014:\n * var result = subYears(new Date(2014, 8, 1), 5)\n * //=> Tue Sep 01 2009 00:00:00\n */\nfunction subYears (dirtyDate, dirtyAmount) {\n  var amount = Number(dirtyAmount)\n  return addYears(dirtyDate, -amount)\n}\n\nmodule.exports = subYears\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/sub_years/index.js?");

/***/ }),

/***/ "./src/adapt.js":
/*!**********************!*\
  !*** ./src/adapt.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convert_miaotu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert/miaotu */ \"./src/convert/miaotu.js\");\n/* harmony import */ var _convert_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert/raw */ \"./src/convert/raw.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (option, dataset) {\n  var convert = null;\n\n  if (!option.hasOwnProperty('format') && !option.hasOwnProperty('version')) {\n    convert = _convert_miaotu__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  } else if (option.format === 'raw') {\n    convert = _convert_raw__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n\n  if (!convert) {\n    return;\n  }\n\n  return convert(option, dataset);\n});\n\n//# sourceURL=webpack:///./src/adapt.js?");

/***/ }),

/***/ "./src/convert/miaotu.js":
/*!*******************************!*\
  !*** ./src/convert/miaotu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return miaotu; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nfunction miaotu(config, dataset, infoset) {\n  var option = {};\n  var stackStateItems = config.stackStateItems;\n  var _config$chartOption = config.chartOption,\n      seriesList = _config$chartOption.seriesList,\n      yAxisList = _config$chartOption.yAxisList,\n      background = _config$chartOption.background;\n  seriesList = seriesList.filter(function (_s) {\n    return _s.show;\n  });\n  var freq = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"minFreq\"])(seriesList.map(function (_s) {\n    var _series = series,\n        sid = _series.sid;\n    return infoset[sid].freq;\n  }));\n  var xAxis = {\n    type: 'category',\n    data: dataset.__keyList,\n    splitLine: {\n      show: background === 'intersect' || background === 'vertical'\n    },\n    axisLabel: {\n      formatter: function formatter(value) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"dateFormatter\"])(value, freq);\n      }\n    }\n  };\n  option.xAxis = [xAxis];\n  option.yAxis = adaptYAxis(yAxisList, seriesList, background);\n  option.series = adaptSeries(seriesList, yAxisList, dataset, stackStateItems);\n  return option;\n}\n\n//# sourceURL=webpack:///./src/convert/miaotu.js?");

/***/ }),

/***/ "./src/convert/raw.js":
/*!****************************!*\
  !*** ./src/convert/raw.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return raw; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction raw(option) {\n  var stdOption = _objectSpread({}, option);\n\n  stdOption.series = option.series.map(function (_s) {\n    var transform = {\n      ratio: 1,\n      fractionDigits: 4\n    };\n\n    if (_s.transform && _s.transform.hasOwnProperty('ratio')) {\n      transform.ratio = _s.transform.ratio;\n    }\n\n    var data = _s.data.map(function (v) {\n      if (v === null || v === undefined) {\n        return null;\n      }\n\n      var isObject = v.hasOwnProperty('value');\n      var value = isObject ? v.value : v;\n\n      if (value === '' || value === null) {\n        return null;\n      }\n\n      value *= transform.ratio;\n      value = parseFloat(value.toFixed(transform.fractionDigits));\n      var res = isObject ? _objectSpread({}, v, {\n        value: value\n      }) : value;\n      return res;\n    });\n\n    return _objectSpread({}, _s, {\n      data: data\n    });\n  });\n\n  if (option.hasOwnProperty('yAxis')) {\n    stdOption.yAxis = option.yAxis.map(function (axis) {\n      var min = axis.min,\n          max = axis.max;\n      var interval = axis.unit;\n\n      if (min !== undefined) {\n        min = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"trimValue\"])(min);\n      }\n\n      if (max !== undefined) {\n        max = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"trimValue\"])(max);\n      }\n\n      if (interval !== undefined) {\n        interval = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"trimValue\"])(interval);\n      }\n\n      return _objectSpread({}, axis, {\n        min: min,\n        max: max,\n        interval: interval\n      });\n    });\n  }\n\n  return stdOption;\n}\n\n//# sourceURL=webpack:///./src/convert/raw.js?");

/***/ }),

/***/ "./src/export.js":
/*!***********************!*\
  !*** ./src/export.js ***!
  \***********************/
/*! exports provided: adapt, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapt */ \"./src/adapt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adapt\", function() { return _adapt__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__; });\n\n\n\n\n//# sourceURL=webpack:///./src/export.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: compareFreq, minFreq, dateFormatter, getBeginDate, getBeginEndByRange, autoPadding, trimValue, toRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compareFreq\", function() { return compareFreq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minFreq\", function() { return minFreq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateFormatter\", function() { return dateFormatter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBeginDate\", function() { return getBeginDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBeginEndByRange\", function() { return getBeginEndByRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoPadding\", function() { return autoPadding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trimValue\", function() { return trimValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRGBA\", function() { return toRGBA; });\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ \"./node_modules/date-fns/format/index.js\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns_get_quarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/get_quarter */ \"./node_modules/date-fns/get_quarter/index.js\");\n/* harmony import */ var date_fns_get_quarter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_quarter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_get_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/get_year */ \"./node_modules/date-fns/get_year/index.js\");\n/* harmony import */ var date_fns_get_year__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_year__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_get_month__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/get_month */ \"./node_modules/date-fns/get_month/index.js\");\n/* harmony import */ var date_fns_get_month__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_month__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_sub_days__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/sub_days */ \"./node_modules/date-fns/sub_days/index.js\");\n/* harmony import */ var date_fns_sub_days__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_days__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns_sub_months__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/sub_months */ \"./node_modules/date-fns/sub_months/index.js\");\n/* harmony import */ var date_fns_sub_months__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_months__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var date_fns_sub_years__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/sub_years */ \"./node_modules/date-fns/sub_years/index.js\");\n/* harmony import */ var date_fns_sub_years__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_years__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction compareFreq(freq1, freq2) {\n  var freqPriority = {\n    D: 1,\n    W: 2,\n    TD: 3,\n    TW: 4,\n    SM: 5,\n    M: 6,\n    Q: 7,\n    SY: 8,\n    Y: 9\n  };\n  var freqP1 = freqPriority[freq1];\n  var freqP2 = freqPriority[freq2];\n\n  if (!freqP1 || !freqP2) {\n    throw Error(\"\".concat(freq1, \" or \").concat(freq2, \" not belong to frequency sequence\"));\n  }\n\n  return freqP1 - freqP2;\n}\nfunction minFreq(freqList) {\n  var minFreq = 'Y';\n  freqList.forEach(function (freq) {\n    if (compareFreq(freq, minFreq) < 0) {\n      minFreq = freq;\n    }\n  });\n  return minFreq;\n}\nfunction dateFormatter(date, freq) {\n  if (freq === 'M') {\n    return date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYY-MM');\n  } else if (freq === 'Q') {\n    return \"\".concat(date_fns_get_year__WEBPACK_IMPORTED_MODULE_2___default()(date), \"-Q\").concat(date_fns_get_quarter__WEBPACK_IMPORTED_MODULE_1___default()(date));\n  } else if (freq === 'SY') {\n    var month = date_fns_get_month__WEBPACK_IMPORTED_MODULE_3___default()(date);\n    return \"\".concat(date_fns_get_year__WEBPACK_IMPORTED_MODULE_2___default()(date), \"-\").concat(month < 6 ? '06' : '12');\n  } else if (freq === 'Y') {\n    return date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYY');\n  }\n\n  return date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYYMMDD');\n}\nfunction getBeginDate(endDate, range) {\n  if (!range.hasOwnProperty('value') || !range.hasOwnProperty('unit')) {\n    console.log('error');\n    return '';\n  }\n\n  switch (range.unit) {\n    case 'day':\n      return date_fns_sub_days__WEBPACK_IMPORTED_MODULE_4___default()(endDate, range.value);\n\n    case 'month':\n      return date_fns_sub_months__WEBPACK_IMPORTED_MODULE_5___default()(endDate, range.value);\n\n    case 'year':\n    default:\n      return date_fns_sub_years__WEBPACK_IMPORTED_MODULE_6___default()(endDate, range.value);\n  }\n}\nfunction getBeginEndByRange(range) {\n  if (range instanceof Array) {\n    return {\n      beginDate: range[0],\n      endDate: range[1]\n    };\n  }\n\n  var endDate = Date.now();\n  var beginDate = getBeginDate(endDate, range);\n  return {\n    beginDate: date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(beginDate, 'YYYYMMDD'),\n    endDate: date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(endDate, 'YYYYMMDD')\n  };\n}\n\nfunction autoSetBottomPadding(option) {\n  if (!option.xAxis) {\n    return;\n  }\n\n  var bottomAxis = null;\n\n  if (option.xAxis instanceof Array) {\n    bottomAxis = option.xAxis.find(function (axis) {\n      return axis.position === 'bottom' || !axis.position;\n    });\n  } else if (option.xAxis.position === 'bottom') {\n    bottomAxis = option.xAxis;\n  }\n\n  if (!bottomAxis) {\n    return;\n  }\n\n  var labelRotation = 0;\n  var _bottomAxis = bottomAxis,\n      axisLabel = _bottomAxis.axisLabel;\n\n  if (axisLabel && axisLabel.hasOwnProperty('rotate')) {\n    labelRotation = parseInt(axisLabel.rotate);\n  }\n\n  if (labelRotation === 90 || labelRotation === -90) {\n    option.grid.bottom = 60;\n  }\n}\n\nfunction autoPadding(option) {\n  autoSetBottomPadding(option);\n}\nfunction trimValue(v) {\n  v = parseFloat(v);\n  return parseFloat(v.toFixed(12));\n}\nfunction toRGBA(color, alpha) {\n  var type = 'unknown';\n  var hexReg = /^#[0-9a-fA-F]{6}$/;\n  var rgbReg = /^rgb\\((\\d+), (\\d+), (\\d+)\\)$/;\n\n  if (hexReg.test(color)) {\n    type = 'hex';\n  } else if (rgbReg.test(color)) {\n    type = 'rgb';\n  }\n\n  if (type === 'unknown') {\n    return color;\n  }\n\n  var red = 0;\n  var green = 0;\n  var blue = 0;\n\n  if (type === 'hex') {\n    red = parseInt(color.substring(1, 3), 16);\n    green = parseInt(color.substring(3, 5), 16);\n    blue = parseInt(color.substring(5, 7), 16);\n  } else if (type === 'rgb') {\n    var re = rgbReg.exec(color);\n    red = re[1];\n    green = re[2];\n    blue = re[3];\n  }\n\n  return \"rgba(\".concat(red, \", \").concat(green, \", \").concat(blue, \", \").concat(alpha, \")\");\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });