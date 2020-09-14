import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let firebaseConfig = {
        apiKey: "AIzaSyBtj8cAicjOhuPn2wdUhCXsNjn2mIRiXOg",
        authDomain: "chat-bf90b.firebaseapp.com",
        databaseURL: "https://chat-bf90b.firebaseio.com",
        projectId: "chat-bf90b",
        storageBucket: "chat-bf90b.appspot.com",
        messagingSenderId: "373752974801",
        appId: "1:373752974801:web:ed8f591ad3052cbb2b64f0",
        measurementId: "G-QGVLL3ER82"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
