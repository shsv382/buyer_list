import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<tr>
					<td>
						{this.props.item.title}
					</td>
					<td>
						<span data-elem={this.props.id} onClick={this.props.increment}>+</span>
						{this.props.item.count} шт.
						<span data-elem={this.props.id} onClick={this.props.decrement}>-</span>
					</td>
					<td>{this.props.item.price} руб.</td>
					<td className="value">{this.props.item.value()} руб.</td>
					<td data-elem={this.props.id} onClick={this.props.removeItem}>&#10006;</td>
				</tr>
		)
	}
}

export default Item;