import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers'
import QuestionReducer from './QuestionReducer'
import UserReducer from './UserReducer'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    quest:QuestionReducer,
    user:UserReducer,
});

export default RootReducer;
