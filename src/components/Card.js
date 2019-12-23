import React from 'react';
import {navigate} from "../../.cache/gatsby-browser-entry";

class Card extends React.Component {
	constructor(props) {
		super(props);

		// This binding is necessary to make `this` work in the callback
		this.onCardClick = this.onCardClick.bind(this);
	}

	onCardClick() {
		navigate('/' + this.props.type);
	}

	render() {
		return (
			<button className="mod_card"
				 onClick={this.onCardClick}
				 onKeyDown={this.onCardClick}>
				<div className="card_title">{this.props.title}</div>
			</button>
		);
	}
}

export default Card;