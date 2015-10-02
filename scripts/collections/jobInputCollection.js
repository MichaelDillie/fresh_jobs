var Backbone = require('backbone');

var jobInputModel = require('../models/jobInputModel.js');

module.exports = Backbone.Collection.extend({
	model: jobInputModel,
	url: 'http://jmingus-server.herokuapp.com/collections/freshJobs'
});
