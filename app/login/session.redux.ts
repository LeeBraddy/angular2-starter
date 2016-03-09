import {Reducer, Action} from '@ngrx/store'
import {Session} from './session'

const ActionTypes = {
    SET_SESSION: 'llb/SET_SESSION',
    CLEAR_SESSION: 'llb/CLEAR_SESSION'
}
export {ActionTypes}

const reducer: Reducer<Session> = (
    state: Session = null,
    action: Action
) => {
    switch (action.type) {
    case ActionTypes.SET_SESSION:
        return action.payload;
    case ActionTypes.CLEAR_SESSION:
        return null;
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

function clearSession() {
    return {
        type: ActionTypes.CLEAR_SESSION
    };
}

const ActionCreators = {
    setSession,
    clearSession
}
export {ActionCreators}
