var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="jobRow">
				<div>
					<a href="#Details">
						<span className="title">Junior Frontend Dev</span>
					</a>
					<span className="date">yesterday</span>
				</div>
				<div>
					<span className="company">ESO •</span>
					<span className="location"> Austin, TX</span>
				</div>
				<div className="description">Looking for a junior frontend dev. fluent in JavaScript, jQuery, Backbone, and React.</div>
				<div className="tags">JavaScript</div>
			</div>
		)
	}
});
