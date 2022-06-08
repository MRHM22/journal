
import { configureStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authreducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authreducer
});

export const store = configureStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
