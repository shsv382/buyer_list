const initialState = {
	items: []
};

export const setItemsList = (state=initialState, action={}) => {
	let items = state.items;
	switch(action.type) {
		case "CREATE_ITEM":
			let item = {
	        	count: 1,
	        	title: action.payload.title,
	        	price: action.payload.price,
	        	value: function() {return this.count * this.price}
	    	}
			return Object.assign({}, state, {
				items: state.items.concat(item)
		    });
		case "INCREMENT":
			items[action.payload].count += 1;
			return Object.assign({}, state, {
				items: [].concat(items)
			});
		case "DECREMENT":
			if (items[action.payload].count > 1) {
		      items[action.payload].count -= 1;
		    } else if (items[action.payload].count <= 1) {
		      items.splice(action.payload, 1)
		    }
			return Object.assign({}, state, {
				items: [].concat(items)
			});
		case 'REMOVE_ITEM':
			items.splice(action.payload, 1);
		    return Object.assign({}, state, {
				items: [].concat(items)
			});
		default:
			return state;
	}
}
