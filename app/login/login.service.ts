import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {ActionCreators} from './session.redux'
import {Session} from './session'
import {Store} from '@ngrx/store'

@Injectable()
export class LoginService {

    constructor(
        private state: Store<any>,
        private http: Http
    ) {}

    private _loginUrl = "http://localhost:3002/login";

    doLogin(username: string, password: string) {
        console.log(`loginService.doLogin: ${username}, ${password}`);

        this.http.get(`${this._loginUrl}?username=${username}`)
            .map(res => res.json()[0])
            .subscribe(
                user => {
                    console.log(user);
                    //TODO set current user.
                    if (user) {
                        this.state.dispatch(
                            ActionCreators.setSession(user)
                        );
                    } else {
                        this.state.dispatch(
                            ActionCreators.clearSession()
                        );
                    }
                },
                err => {
                    this.state.dispatch(
                        ActionCreators.clearSession()
                    );
                    console.log(err)
                },
                () => console.log("loginService.doLogin: complete")
            );
    }
}
