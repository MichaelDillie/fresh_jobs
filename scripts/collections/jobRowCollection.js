var Backbone = require('backbone');

var jobListModel = require('../models/jobListModel.js');

module.exports = Backbone.Collection.extend({
	model: jobListModel,
	url: 'http://jmingus-server.herokuapp.com/collections/freshJobs'
});
