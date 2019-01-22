import React from 'react';
import Item from './Item.js';

const ItemList = (props) => {
    let items = props.items.map((item, i) => {
    	return <Item item={ item } 
    				 key={ Math.floor(Math.random() * 100) } 
    				 id={ i }
    				 increment={props.increment}
    				 decrement={props.decrement}
    				 removeItem={props.removeItem} />
    });

    return (
    	<tbody>
	       	{items} 
	    </tbody>
	);
}

export default ItemList;