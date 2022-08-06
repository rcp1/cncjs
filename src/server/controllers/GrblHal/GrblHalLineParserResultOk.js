class GrblHalLineParserResultOk {
    static parse(line) {
        const r = line.match(/^ok$/);
        if (!r) {
            return null;
        }

        const payload = {};

        return {
            type: GrblHalLineParserResultOk,
            payload: payload
        };
    }
}

export default GrblHalLineParserResultOk;
