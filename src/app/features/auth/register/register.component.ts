import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent],
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
