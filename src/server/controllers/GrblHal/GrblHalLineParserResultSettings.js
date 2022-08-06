import _ from 'lodash';

class GrblHalLineParserResultSettings {
    static parse(line) {
        const r = line.match(/^(\$[^=]+)=([^ ]*)\s*(.*)/);
        if (!r) {
            return null;
        }

        const payload = {
            name: r[1],
            value: r[2],
            message: _.trim(r[3], '()')
        };

        return {
            type: GrblHalLineParserResultSettings,
            payload: payload
        };
    }
}

export default GrblHalLineParserResultSettings;
