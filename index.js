var _ = require('underscore');
var allExports = require('./dist/mdp');
module.exports = _.extend(allExports, require('./dist/iteration'))
module.exports.utils = require('./dist/utils');
