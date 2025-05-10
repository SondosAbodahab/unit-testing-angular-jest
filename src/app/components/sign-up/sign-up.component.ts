import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  password = '';
  passwordRepeat = '';

  onChangePassword(event:Event){
    this.password =  (event.target as HTMLInputElement).value
  }
  onChangePasswordRepeat(event:Event){
    this.passwordRepeat =  (event.target as HTMLInputElement).value
  }
  isDisabled(){
   return this.password ?(this.password !== this.passwordRepeat) : true
  }
}
