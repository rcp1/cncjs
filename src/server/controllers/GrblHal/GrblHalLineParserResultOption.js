class GrblHalLineParserResultOption {
    static parse(line) {
        // * Grbl v1.1
        //   [OPT:]
        const r = line.match(/^\[(?:OPT:)(.+)\]$/);
        if (!r) {
            return null;
        }

        const payload = {
            message: r[1]
        };

        return {
            type: GrblHalLineParserResultOption,
            payload: payload
        };
    }
}

export default GrblHalLineParserResultOption;
