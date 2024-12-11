import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { passwordValidator } from '../../../validators/passwordValidator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },
  {validators: passwordValidator()}
  
)

  options: AnimationOptions = {
    path: "assets/images/logo.json",
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  } 

  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
      if(this.registerForm.valid)
      {
        const userData = {
          email: this.registerForm.get('email')!.value || '',
          password: this.registerForm.get('password')!.value || ''
        }
        this.userService.postUser(userData).subscribe({
          next: () => this.router.navigate(['home']),
          error: (err) => console.log(err)
        })
      }   
      else {
        alert('Fill All Fields Correctly!')
      }
  }
}
