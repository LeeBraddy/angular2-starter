import {Component} from 'angular2/core'
import {Observable} from 'rxjs/Observable'
import {LoginFormComponent} from './login/login-form.component'
import {LoginService} from './login/login.service'
import {Store} from '@ngrx/store'
import {AppState, AppStateProvider} from './state'

@Component({
    selector: 'my-app',
    template: `
        <h1>My App</h1>
        <login-form (submitted)="doLogin($event)"></login-form>
        <p>Session: {{ session | async }}
    `,
    directives: [LoginFormComponent],
    providers: [LoginService, AppStateProvider]
})
export class AppComponent {
    session: Observable<string>;

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
