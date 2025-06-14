import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(private router: Router ,private authservice:AuthService ) {}

  goToQuestions() {
    this.router.navigate(['/questions']); // Redirects to the questions page
  }
  startNow() {
    if(this.authservice.loginCase==true){

      this.router.navigate(['/questions']); // توجيه المستخدم إلى صفحة الأسئلة
    }else{
      this.router.navigate(['/login']); // توجيه المستخدم إلى صفحة الأسئلة
    }
  }

}
