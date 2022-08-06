class GrblHalLineParserResultHelp {
    static parse(line) {
        // * Grbl v1.1
        //   [HLP:]
        const r = line.match(/^\[(?:HLP:)(.+)\]$/);
        if (!r) {
            return null;
        }

        const payload = {
            message: r[1]
        };

        return {
            type: GrblHalLineParserResultHelp,
            payload: payload
        };
    }
}

export default GrblHalLineParserResultHelp;
