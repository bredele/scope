var props = require('./lib/props');

/**
 * Extend scope chain of statement
 * and return function.
 *
 * @param {String} statement
 * @return {Function} 
 * @api public
 */

module.exports = function(statement){
	var result = props(statement, 'model.');
	return new Function('model', 'return ' + result);
};