var React = require('react');

var JobDetailsComponent = require('./JobDetailsComponent.js');
var FeaturedCompanyComponent = require('./FeaturedCompanyComponent.js');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<JobDetailsComponent />
				<FeaturedCompanyComponent />
			</div>
		)
	}
});
