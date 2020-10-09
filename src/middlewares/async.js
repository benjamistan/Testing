// this does pretty much exactly what ReduxPromise does

export default ({ dispatch }) => next => action => {
    // check to see if the action has a promise on its payload
    // if no, send action to next middleware
    //debugger;

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // if yes, then wait for it to resolve
    // then create a new action with the data as payload
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response }  // adding request response data to the action's payload
        return dispatch(newAction);                            // putting the action back in the system with payload
    });
};

        
    
