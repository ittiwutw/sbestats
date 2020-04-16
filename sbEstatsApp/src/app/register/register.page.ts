import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email: '',
    password: '',
    name: '',
    phoneNo: ''
  };

  constructor(
    private router: Router,
    private restApi: RestService
  ) { }

  ngOnInit() {
  }

  onclickRegister() {
    console.log(this.user);
    this.restApi.register(this.user).then(res => {
      console.log(res);
      let result: any;

      result = res;

      if (result.response_code === '0001') {
        alert(result.response_description);
      } else {
        alert('สมัครสมาชิกสำเร็จ');
        this.router.navigate(['/login']);
      }

    });
  }

  onClickLogin(){
    this.router.navigate(['/login']);
  }

}
