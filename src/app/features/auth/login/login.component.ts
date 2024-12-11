import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  options: AnimationOptions = {
    path: "assets/images/logo.json",
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  } 

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
    if(this.loginForm.valid){
      const userData = {
        email: this.loginForm.get('email')!.value || '',
        password: this.loginForm.get('password')!.value || '' 
      }

      this.userService.searchUser(userData).subscribe({
        next: () => { this.router.navigate(['/home'])},
        error: (err) => { alert("Usuário Não Cadastrado")}
      })
    }
  }

}
