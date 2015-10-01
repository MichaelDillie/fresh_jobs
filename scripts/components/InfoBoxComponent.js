var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="infoBox">
				<div className="title">Looking for a job?</div>
				<div>Create a Fresh Job profile and <strong>let employers come to you.</strong></div>
				<li>Employers search our database and contact you</li>
				<li>Import easily from LinkedIn</li>
				<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
				<div className="btn">
					<button>Create a Profile</button>
				</div>
			</div>
		)
	}
});
