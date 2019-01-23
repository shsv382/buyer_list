export const createItem = (event) => ({
	type: 'CREATE_ITEM',
	payload: parseInt(event.target.previousSibling.value) && parseInt(event.target.previousSibling.value) > 0 ?
	 parseInt(event.target.previousSibling.value) : 1
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
