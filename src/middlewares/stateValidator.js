import stateSchema from 'middlewares/stateSchema';
import tv4 from 'tv4';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    
    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Data does not conform to schema');
    };
}