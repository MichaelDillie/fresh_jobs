var React = require('react');

var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var InfoBoxComponent = require('./InfoBoxComponent.js');
var FeaturedCompanyComponent = require('./FeaturedCompanyComponent.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="JobList">
					<FilterBoxComponent />
					<JobRowComponent />
					<JobRowComponent />
					<JobRowComponent />
				</div>
				<div className="InfoBox">
					<InfoBoxComponent />
					<FeaturedCompanyComponent />
				</div>
			</div>
		);
	}
});
