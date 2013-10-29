var props = require('lib/props');

/**
 * Expose 'with'
 */

module.exports = function(statement){
	var result = props(statement, '.model');
	return new Function('model', result);
};