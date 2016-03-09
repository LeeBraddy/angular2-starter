import {Component} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {LoginFormComponent} from './login/login-form.component'
import {LoginService} from './login/login.service'
import {Session} from './login/session'
import {Store} from '@ngrx/store'
import {AppState, AppStateProvider} from './state'

@Component({
    selector: 'my-app',
    template: `
        <h1>My App</h1>
        <login-form (submitted)="doLogin($event)"></login-form>
        <p>Session: {{ session | async | json }}
    `,
    directives: [LoginFormComponent],
    providers: [LoginService, AppStateProvider, HTTP_PROVIDERS]
})
export class AppComponent {
    session: Observable<Session>;

    constructor(
        private state: Store<AppState>,
        private loginService: LoginService
    ) {
        this.session = state.select('session');
    }

    doLogin(credentials) {
        console.log(credentials);
        this.loginService.doLogin(
            credentials.username, credentials.password
        );
    }
}
