const initialState = {
	items: []
};

export const setItemsList = (state=initialState, action={}) => {
	switch(action.type) {
		case "CREATE_ITEM":
			return Object.assign({}, state, {
				items: state.items.concat({
		        	count: 1,
		        	price: action.payload,
		        	value: function() {return this.count * this.price}
		    	})
		    });
		case "INCREMENT":
			let incItems = state.items;
			incItems[action.payload].count += 1;
			return Object.assign({}, state, {
				items: incItems
			});
		case "DECREMENT":
			let decItems = state.items;
			if (decItems[action.payload].count > 1) {
		      decItems[action.payload].count -= 1;
		    } else if (decItems[action.payload].count <= 1) {
		      decItems.splice(action.payload, 1)
		    }
			return Object.assign({}, state, {
				items: decItems
			});
		case 'REMOVE_ITEM':
			let newItems = state.items;
		    newItems.splice(action.payload, 1);
		    return Object.assign({}, state, {
				items: newItems
			});
		default:
			return state;
	}
}
