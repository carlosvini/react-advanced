export default function ({ dispatch }) {
    return next => action => {
        // we dont care about it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        next(action);
    };
}