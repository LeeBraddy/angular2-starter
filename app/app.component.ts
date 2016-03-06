import {Component} from 'angular2/core';
//import {LoginFormComponent} from './login/login-form.component';
//import {LoginService} from './login/login.service';
//import {Store, provideStore} from '@ngrx/store';
//import {AppState, AppStateProvider} from './state';

@Component({
    selector: 'my-app',
    template: `Hello Starter`
//        <h1>My First Angular 2 App</h1>
//        <login-form (submitted)="doLogin($event)"></login-form>
//        <p>My Session {{ session | async }}
//    `,
//    directives: [LoginFormComponent],
//    providers: [LoginService, AppStateProvider]
})
export class AppComponent {
    // session: Observable<string>;

    // constructor(
    //     private state: Store<AppState>,
    //     private loginService: LoginService
    // ) {
    //     this.session = state.select('session');
    // }

    // doLogin(credentials) {
    //     console.log(credentials);
    //     this.loginService.doLogin(...credentials);
    // }
}
