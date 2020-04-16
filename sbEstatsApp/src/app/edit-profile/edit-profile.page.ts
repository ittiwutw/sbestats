import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

userProfile = {
  email: '',
  password: '',
  name: '',
  phoneNo: ''
};

  constructor(private router: Router,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get('user').then(user => {
      if (user) {
        this.userProfile = {
          email: user.email,
          password: user.password,
          name: user.name,
          phoneNo: user.phoneNo
        };
        console.log(this.userProfile);
      }
    });
  }

}
