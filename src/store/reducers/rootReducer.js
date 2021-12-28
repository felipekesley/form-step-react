import { combineReducers } from 'redux'
import StepOneReducer from './StepOne.reducer'
import StepTwoReducer from './StepTwo.reducer'

const rootReducers = combineReducers({
	StepOneReducer,
	StepTwoReducer
})

export default rootReducers
