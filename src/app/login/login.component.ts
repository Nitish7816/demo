import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user: string;
   pass: string;
   i: number;
  constructor(private router: Router) { }
    data = [{
    username: 'rahul',
      password: 'anything'
    }, {
    username: 'nitish',
      password: 'anything'
    },
      {
        username: 'abc',
        password: '123'
      }
    ]
  ngOnInit() {
  }

  loginUser(e) {
    this.user = e.target.elements[0].value;
    this.pass =  e.target.elements[1].value;
    for (var i=0; i <= this.data.length; i++) {
      if (this.data[i].username === this.user && this.data[i].password === this.pass) {
        this.router.navigate(['welcome']);
      }
    }
  }

}
