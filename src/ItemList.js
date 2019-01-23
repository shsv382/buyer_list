import React from 'react';
import Item from './Item.js';

class ItemList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { items, increment, decrement, removeItem } = this.props;
	    items = items.map((item, i) => {
	    	return <Item item={ item }  
	    				 id={ i }
	    				 // key={ 'key' + Math.floor(Math.random() * 10000) }
	    				 increment={increment}
	    				 decrement={decrement}
	    				 removeItem={removeItem} />
	    });

	    return (
	    	<tbody>
		       	{items} 
		    </tbody>
		);
	}
}

export default ItemList;