var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="FeaturedCompany">
				<div className="title">Featured Company</div>
				<div className="ImgWrapper">
					<img src="../images/featured.jpg" className="mainImg" />
					<img src="../images/featured-logo.jpg" className="mainLogo" />
				</div>
				<div className="MaxPlay">MaxPlay</div>
				<div className="FeaturedLocation">Austin, TX</div>
			</div>
		)
	}
});
