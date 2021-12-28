import { actionTypes } from '../actions/stepOne.action'

const initialState = {
	name: '',
	email: ''
}

export default function StepOneReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actionTypes.CHANGE:
			return {
				...state,
				...payload
			}

		default:
			return state
	}
}
