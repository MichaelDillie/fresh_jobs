var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="nav">

				<img src="../images/logo.png" />
				<a href="#Home">
					<div className="company-name">Fresh Jobs</div>
				</a>

				<a href="#Jobs">
					<div className="nav-links">JOBS</div>
				</a>

				<a href="#Companies">
					<div className="nav-links">COMPANIES</div>
				</a>

				<a href="#Cities">
					<div className="nav-links">CITIES</div>
				</a>

				<a href="#Why-Fresh?">
					<div className="nav-links">WHY FRESH?</div>
				</a>

				<a href="#For-Employers">
					<div className="nav-links">FOR EMPLOYERS</div>
				</a>

			</div>
		)
	}
});
