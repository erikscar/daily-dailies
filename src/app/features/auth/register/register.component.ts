import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent, CommonModule, RouterLink],
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
}
