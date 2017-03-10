export default function ({ dispatch }) {
    return next => action => {
        // not a promise
        // we dont care about it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        //  Make sure the action's promise resolves
        action.payload
            .then(response => {
                // create a new action with the same type
                // replace the promise with the response data
                const newAction = { ...action, payload: response };

                dispatch(newAction);
            });
    };
}