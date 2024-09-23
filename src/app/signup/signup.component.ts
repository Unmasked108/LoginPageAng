import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSignup() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/signup', user).subscribe((res: any) => {
      alert(res.message);
      this.router.navigate(['/login']);
    });
  }

}
