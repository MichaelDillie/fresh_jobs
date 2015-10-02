var React = require('react');

var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var InfoBoxComponent = require('./InfoBoxComponent.js');
var FeaturedCompanyComponent = require('./FeaturedCompanyComponent.js');
var jobListModel = require('../models/jobListModel.js');

var fakeList1 = new jobListModel({id: 1, title: 'Junior Frontend Dev', date: 'yesterday', companyName: 'ESO Solutions', location: 'Austin, TX', description: 'Looking for a junior frontend dev. fluent in JavaScript, jQuery, Backbone, and React.'})
var fakeList2 = new jobListModel({id: 2, title: 'Senior Frontend Dev', date: 'yesterday', companyName: 'Google', location: 'Austin, TX', description: 'Looking for a senior frontend dev. fluent in JavaScript, jQuery, Backbone, and React.'})



module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="JobList">
					<FilterBoxComponent />
					<JobRowComponent model={fakeList1} />
					<JobRowComponent model={fakeList2} />
				</div>
				<div className="InfoBox">
					<InfoBoxComponent />
					<FeaturedCompanyComponent />
				</div>
			</div>
		);Name
	}
});
