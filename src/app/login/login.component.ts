import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule,RouterOutlet,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const credentials = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/login', credentials).subscribe(
      (res: any) => {
        alert(res.message);
        if (res.message === 'Login successful') {
          this.router.navigate(['/car-buying']);
        }
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

}
