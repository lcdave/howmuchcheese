import React from 'react';
import {navigate} from "../../.cache/gatsby-browser-entry";
import { Link } from "gatsby"
import { FaLongArrowAltLeft } from "react-icons/fa";


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.onArrowBackClick = this.onArrowBackClick.bind(this);
	}

	onArrowBackClick() {
		console.log('blub');
		navigate('/');
	}

	render() {
		let subheader;
		if (this.props.showSubheader) {
			subheader = <h1 className="header_sub">Was willst du essen?</h1>
		}

		let headerBack;
		if (this.props.showHeaderBack) {
			headerBack =
				<Link to="/" className="header_back">
					<FaLongArrowAltLeft />
				</Link>
			;
		}
		return (
			<div className="mod_header">
				{headerBack}
				<h1 className="header_main">SayCheese!</h1>
				{subheader}
			</div>
		);
	}
}

export default Header;