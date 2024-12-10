import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { FormsModule } from '@angular/forms'
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { UserService } from '../../../services/user.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent, CommonModule,  FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  options: AnimationOptions = {
    path: "assets/images/logo.json",
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  } 

  email!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    }
    this.router.navigate(['/home'])
    this.userService.postUser(userData).subscribe({
      complete: () => { this.router.navigate(['home'])},
      error: (error) => { console.log(error)}
    }
    )
  }
}
