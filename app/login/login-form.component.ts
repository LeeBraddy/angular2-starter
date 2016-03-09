import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'login-form',
    template: `
        <form (ngSubmit)="doSubmit()">
        <input [(ngModel)]="username" type="text" name="username" placeholder="Username" required />
        <input [(ngModel)]="password" type="password" name="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        </form>
        <p>Username: {{username}}</p>
        <p>Password: {{password}}</p>
    `
})
export class LoginFormComponent {
    username: string;
    password: string;

    doSubmit() {
        this.submitted.emit({
            username: this.username,
            password: this.password
        });
    }

    @Output() submitted = new EventEmitter();
}
