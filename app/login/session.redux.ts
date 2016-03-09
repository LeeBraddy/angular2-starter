import {Reducer, Action} from '@ngrx/store';

const ActionTypes = {
    SET_SESSION: 'llb/SET_SESSION'
}
export {ActionTypes}

const reducer: Reducer<string> = (
    state: string = "",
    action: Action
) => {
    switch (action.type) {
    case ActionTypes.SET_SESSION:
        return action.payload;
    default:
        return state;
    }
};
export default reducer

function setSession(session) {
    return {
        type: ActionTypes.SET_SESSION,
        payload: session
    };
}

const ActionCreators = {
    setSession
}
export {ActionCreators}
