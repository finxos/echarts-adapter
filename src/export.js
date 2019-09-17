import toEcharts from './toEcharts';
import * as utils from './utils';
import * as echarts from './lib/echarts';
import { assembleData } from './assembleData';
import adaptInst from './adapt/adaptInst';
import china from './lib/china.json';
import { simpleChart } from './toEcharts/simpleChart';
echarts.registerMap('china', china);

export { echarts, toEcharts, utils, assembleData, adaptInst, simpleChart };
