import {provideStore} from '@ngrx/store'
import session from './login/session.redux'

export interface AppState {
    session: string;
}

const reducers = { session };
const initialState = { session: "default session" };

export const AppStateProvider = provideStore(
    reducers,
    initialState
);
