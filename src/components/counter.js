import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 1,
			amountTop: 300,
			amountBottom: 400,
			amountSingle: 200,
			unit: 'g',
			disabled: false,
		};

		// This binding is necessary to make `this` work in the callback
		this.onAddClick = this.onAddClick.bind(this);
		this.onRemoveClick = this.onRemoveClick.bind(this);

	};

	UNSAFE_componentWillMount() {
		if (this.state.counter <= 1) {
			this.setState({
				disabled: true
			});
		}
	}


	onAddClick() {
		this.setState({
			counter: this.state.counter + 1,
			amountTop: this.state.amountTop + 150,
			amountBottom: this.state.amountBottom + 200,
			amountSingle: this.state.amountSingle + 200,
			disabled: false
		});
	};

	onRemoveClick = e => {
		if (this.state.counter > 1) {
			this.setState({
				counter: this.state.counter - 1,
				amountTop: this.state.amountTop - 150,
				amountBottom: this.state.amountBottom - 200,
				amountSingle: this.state.amountSingle - 200
			});
			if (this.state.counter === 2) {
				this.setState({
					disabled: true
				})
			}
		} else {
			e.preventDefault();
			this.setState({
				disabled: true
			})
		}
	};

	render() {
		let amount;
		switch (this.props.type) {
			case 'Fondue':
				amount =
					<div className="mod_amount">
						<div className="amount_top">{this.state.amountTop}{this.state.unit}</div>
						<div className="amount_bottom">{this.state.amountBottom}{this.state.unit}</div>
					</div>
				;
				break;
			case 'Raclette':
				amount =
					<div className="mod_amount">
						<div className="amount_single">{this.state.amountSingle}{this.state.unit}</div>
					</div>
				;
				break;
			default:
				break;
		}

		return (
			<div className="mod_calculator">
				<div className="mod_counter">
					<div className="counter_title">{this.props.type} für</div>
					<div className="counter_content">
						<div className="counter_icon">
							<FaRegUser />
						</div>
						<div className="counter_counter">{this.state.counter}</div>
						<button className={this.state.disabled ? 'counter_remove disabled' : 'counter_remove'}
							 onClick={this.onRemoveClick}
							 onKeyDown={this.onRemoveClick}>
							<FaMinus />
						</button>
						<button className="counter_add"
							 onClick={this.onAddClick}
							 onKeyDown={this.onAddClick}>
							<FaPlus />
						</button>
					</div>
				</div>
				{amount}
			</div>
		);
	};
}

export default Counter;