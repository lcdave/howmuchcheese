import React from 'react';

class Counter extends React.Component {
	render() {
		return (
			<div className="mod_counter">
				<div className="counter_title">Fondue für</div>
				<div className="counter_content">
					<div className="counter_icon"><i class="far fa-user"></i></div>
					<div className="counter_counter">1</div>
					<div className="counter_remove"><i class="fas fa-minus"></i></div>
					<div className="counter_add"><i class="fas fa-plus"></i></div>
				</div>
			</div>
		);
	}
}

export default Counter;