import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

ngOnInit() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAxBMt_m0BHjGMu94PG3FNMh-uFEo-o13U',
    authDomain: 'ng-shopping-recipe.firebaseapp.com',

  });
}
}
