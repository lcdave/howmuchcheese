import React from 'react';
import {navigate} from "../../.cache/gatsby-browser-entry";

class Card extends React.Component {
	constructor(props) {
		super(props);

		// This binding is necessary to make `this` work in the callback
		this.onCardClick = this.onCardClick.bind(this);
	}

	onCardClick() {
		console.log(this.props.type);
		navigate('/fondue');
	}
	render() {
		return (
			<div className="mod_card" onClick={this.onCardClick}>
				<div className="card_title">{this.props.title}</div>
			</div>
		);
	}
}

export default Card;