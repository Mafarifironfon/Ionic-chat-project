import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  providerFb: firebase.auth.FacebookAuthProvider;

  constructor(public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private fb: Facebook,
    public platform: Platform) {
      this.providerFb = new firebase.auth.FacebookAuthProvider()
    }

    facebookLogin() {
      if (this.platform.is('cordova')) {
        console.log('PLateforme cordova');
    
      } else {
        console.log('PLateforme Web');

      }
  }

}
