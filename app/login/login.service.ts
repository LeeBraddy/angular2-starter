import {Injectable} from 'angular2/core'
import {ActionCreators} from './session.redux'
import {Store} from '@ngrx/store'

@Injectable()
export class LoginService {

    constructor(private state: Store<any>) {}

    doLogin(username: string, password: string) {
        console.log(`login.service: ${username}, ${password}`);
        // TODO make call to login api to get session.

        this.state.dispatch(
            ActionCreators.setSession("new login session")
        );
    }
}
