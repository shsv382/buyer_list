import React from 'react';

const Item = (props) => {
	return (
		<tr>
			<td>
				<span data-elem={props.id} onClick={props.increment}>+</span>
				{props.item.count} шт.
				<span data-elem={props.id} onClick={props.decrement}>-</span>
			</td>
			<td>{props.item.price} руб.</td>
			<td className="value">{props.item.value()} руб.</td>
			<td data-elem={props.id} onClick={props.removeItem}>&#10006;</td>
		</tr>
	)
}

export default Item;