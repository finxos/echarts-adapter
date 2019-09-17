export function simpleChart(option) {
  if (option.hasOwnProperty('title')) {
    delete option.title;
  }
  if (option.hasOwnProperty('legend')) {
    delete option.legend;
  }
  option.grid = {
    top: 20,
    bottom: 0,
    left: 10,
    right: 10,
    containLabel: true
  };
  return option;
}
