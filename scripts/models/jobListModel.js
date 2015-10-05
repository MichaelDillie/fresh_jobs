var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		title: '',
		date: '',
		companyName: '',
		location: '',
		description: ''
	},
	urlRoot: 'http://jmingus-server.herokuapp.com/collections/freshJobs',
	idAttribute: '_id'
});
