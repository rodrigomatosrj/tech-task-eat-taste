import { createStore } from "redux";

const INITIAL_STATE = { items: [], total: 0 };

function pedidos(state = INITIAL_STATE, action) {
	let items = [...state.items];
	let pos = items.findIndex((el) => el.id === action.item.id);

	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				items: [...state.items, action.item],
				total: state.total + action.item.valor,
			};
		case "UPDATE_ITEM":
			items[pos] = action.item;
			return { ...state, items: items, total: action.total };
		case "REMOVE_ITEM":
			items.splice(pos, 1);
			return { ...state, items: items, total: action.total };
		default:
			return state;
	}
}

const store = createStore(pedidos);

export default store;
