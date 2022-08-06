import _ from 'lodash';
import GrblHalLineParserResultStatus from './GrblHalHalLineParserResultStatus';
import GrblHalLineParserResultOk from './GrblHalLineParserResultOk';
import GrblHalLineParserResultError from './GrblHalLineParserResultError';
import GrblHalLineParserResultAlarm from './GrblHalLineParserResultAlarm';
import GrblHalLineParserResultParserState from './GrblHalLineParserResultParserState';
import GrblHalLineParserResultParameters from './GrblHalLineParserResultParameters';
import GrblHalLineParserResultHelp from './GrblHalLineParserResultHelp';
import GrblHalLineParserResultVersion from './GrblHalLineParserResultVersion';
import GrblHalLineParserResultOption from './GrblHalLineParserResultOption';
import GrblHalLineParserResultEcho from './GrblHalLineParserResultEcho';
import GrblHalLineParserResultFeedback from './GrblHalLineParserResultFeedback';
import GrblHalLineParserResultSettings from './GrblHalLineParserResultSettings';
import GrblHalLineParserResultStartup from './GrblHalLineParserResultStartup';

// Grbl v1.1
// https://github.com/gnea/grbl/blob/edge/doc/markdown/interface.md

class GrblHalLineParser {
    parse(line) {
        const parsers = [
            // <>
            GrblHalLineParserResultStatus,

            // ok
            GrblHalLineParserResultOk,

            // error:x
            GrblHalLineParserResultError,

            // ALARM:
            GrblHalLineParserResultAlarm,

            // [G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.] (v0.9)
            // [GC:G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.] (v1.1)
            GrblHalLineParserResultParserState,

            // [G54:0.000,0.000,0.000]
            // [G55:0.000,0.000,0.000]
            // [G56:0.000,0.000,0.000]
            // [G57:0.000,0.000,0.000]
            // [G58:0.000,0.000,0.000]
            // [G59:0.000,0.000,0.000]
            // [G28:0.000,0.000,0.000]
            // [G30:0.000,0.000,0.000]
            // [G92:0.000,0.000,0.000]
            // [TLO:0.000]
            // [PRB:0.000,0.000,0.000:0]
            GrblHalLineParserResultParameters,

            // [HLP:] (v1.1)
            GrblHalLineParserResultHelp,

            // [VER:] (v1.1)
            GrblHalLineParserResultVersion,

            // [OPT:] (v1.1)
            GrblHalLineParserResultOption,

            // [echo:] (v1.1)
            GrblHalLineParserResultEcho,

            // [] (v0.9)
            // [MSG:] (v1.1)
            GrblHalLineParserResultFeedback,

            // $xx
            GrblHalLineParserResultSettings,

            // GrblHal X.Xx ['$' for help]
            GrblHalLineParserResultStartup
        ];

        for (let parser of parsers) {
            const result = parser.parse(line);
            if (result) {
                _.set(result, 'payload.raw', line);
                return result;
            }
        }

        return {
            type: null,
            payload: {
                raw: line
            }
        };
    }
}

export default GrblHalLineParser;
