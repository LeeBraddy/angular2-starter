import {provideStore} from '@ngrx/store'
import session from './login/session.redux'
import {Session} from './login/session'

export interface AppState {
    session: Session;
}

const reducers = { session };

//const initialState = { session: "default session" };

// export const AppStateProvider = provideStore(
//     reducers,
//     initialState
// );

export const AppStateProvider = provideStore(
    reducers
);
