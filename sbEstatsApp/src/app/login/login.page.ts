import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: '';
  password: '';
  constructor(
    private restApi: RestService,
    private router: Router,
    private events: Events,
    private storage: Storage
  ) {
    // this.storage.get('user').then((val) => {
    //   console.log(val);
    //   if (val) {
    //     this.router.navigate(['/tabs']);
    //   }
    // });
  }

  ngOnInit() {
    // this.storage.get('user').then((val) => {
    //   console.log(val);
    //   if (val) {
    //     this.router.navigate(['/tabs']);
    //   }
    // });
  }

  login() {
    const param = {
      email: this.email,
      password: this.password
    };

    this.restApi.login(param).then(res => {
      console.log(res);
      let data: any;
      data = res;

      const userData = data.data;
      if (userData) {
        console.log(userData.result[0]);
        // this.router.navigate(['/tabs']);
        const userInfo = userData.result[0];

        // add to storage
        this.storage.set('user', userInfo).then((val) => {
          // this.events.publish('user:login');
          this.router.navigate(['/tabs']);
        });

      } else {
        alert(data.response_description);
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
