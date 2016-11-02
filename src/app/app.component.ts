import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import * as firebase from 'firebase';
import { Login } from  '../pages/login/login';
import { CategoryPage } from  '../pages/category/category';
import { Database } from '../fireframe/database';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = CategoryPage;

  constructor(platform: Platform) {

   
  }
}
