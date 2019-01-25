export const createItem = (event) => ({
	type: 'CREATE_ITEM',
	payload: {
		title: event.target.previousSibling.previousSibling.value.length == 0 ? 
		"item" : event.target.previousSibling.previousSibling.value,
		price:
		parseInt(event.target.previousSibling.value) && parseInt(event.target.previousSibling.value) > 0 ?
	 parseInt(event.target.previousSibling.value) : 50
	}
});

export const increment = (event) => ({
	type: 'INCREMENT',
	payload: parseInt(event.target.dataset.elem)
});

export const decrement = (event) => ({
	type: 'DECREMENT',
	payload: parseInt(event.target.dataset.elem)
});

export const removeItem = (event) => ({
	type: 'REMOVE_ITEM',
	payload: parseInt(event.target.dataset.elem)
});
