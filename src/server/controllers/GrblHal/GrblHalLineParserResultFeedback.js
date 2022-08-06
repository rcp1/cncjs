// https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#feedback-messages
class GrblHalLineParserResultFeedback {
    // * Grbl v0.9
    //   []
    // * Grbl v1.1
    //   [MSG:]
    static parse(line) {
        const r = line.match(/^\[(?:MSG:)?(.+)\]$/);
        if (!r) {
            return null;
        }

        const payload = {
            message: r[1]
        };

        return {
            type: GrblHalLineParserResultFeedback,
            payload: payload
        };
    }
}

export default GrblHalLineParserResultFeedback;
