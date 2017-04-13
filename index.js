/* eslint-disable global-require */
module.exports = {
    rules: {
        'brace-style': require('./custom-rules/brace-style'),
        indent: require('./custom-rules/indent'),
        'padded-blocks': require('./custom-rules/padded-blocks'),
    },
};