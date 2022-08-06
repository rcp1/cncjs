// https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#grbl-response-meanings
class GrblHalHalLineParserResultError {
    static parse(line) {
        const r = line.match(/^error:\s*(.+)$/);
        if (!r) {
            return null;
        }

        const payload = {
            message: r[1]
        };

        return {
            type: GrblHalHalLineParserResultError,
            payload: payload
        };
    }
}

export default GrblHalHalLineParserResultError;
