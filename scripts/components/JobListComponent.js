var React = require('react');

var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var InfoBoxComponent = require('./InfoBoxComponent.js');
var FeaturedCompanyComponent = require('./FeaturedCompanyComponent.js');
var jobRowCollection = require('../collections/jobRowCollection.js');
var jobRow = new jobRowCollection();



module.exports = React.createClass({
	componentWillMount: function() {
		var that = this;
		jobRow.fetch();
		jobRow.on('sync', function() {
			that.forceUpdate();
		});
	},
	render: function() {
		var allJobs = jobRow.map(function(model) {
			return <JobRowComponent job = {model} />
		});
		return (
			<div>
				<div className="JobList">
					<FilterBoxComponent />
					{allJobs}
				</div>
				<div className="InfoBox">
					<InfoBoxComponent />
					<FeaturedCompanyComponent />
				</div>
			</div>
		);
	}
});
