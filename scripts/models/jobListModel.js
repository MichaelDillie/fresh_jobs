var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		title: '',
		date: '',
		companyName: '',
		location: '',
		description: ''
	}
})
