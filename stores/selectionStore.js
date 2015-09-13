var EventEmitter = require('events')
var assign = require('object-assign')
var _selections = {}

var selectionStore = module.exports = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on('CHANGE', callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener('CHANGE', callback);
	},

	getSelection: function (option) {
		return _selections[option]
	},

	getAllSelections: function () {
		return _selections
	},

	setSelection: function (option, value) {
		_selections[option] = value
		selectionStore.emit('CHANGE')
	}

});