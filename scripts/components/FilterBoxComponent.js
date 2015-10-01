var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="filterBox">
				<div className="keywordWrapper">
					<div className="keyword">Keyword</div>
					<input type="text" />
				</div>
				<div className="locatinWrapper">
					<div className="filter-location">Location</div>
					<input type="text" />
				</div>
				<button>Search</button>
			</div>
		)
	}
});
