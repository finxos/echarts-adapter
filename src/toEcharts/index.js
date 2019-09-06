import miaotu from './miaotu';
import raw from './raw';

export default function (option, dataset, infoset) {
    let convert = null;

    if (
        !option.hasOwnProperty('format') &&
        !option.hasOwnProperty('version')
    ) {
        convert = miaotu;
    } else if (option.format === 'raw') {
        convert = raw;
    }

    if (!convert) {
        return;
    }
    return convert(option, dataset, infoset);
}
