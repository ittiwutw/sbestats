import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  Login() {
    // this.fb.login(['public_profile', 'user_friends', 'email'])
    //   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    //   .catch(e => console.log('Error logging into Facebook', e));


    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    // this.storage.set('currentUser', 'test');
    // this.router.navigateByUrl('/tabs');
  }

}
