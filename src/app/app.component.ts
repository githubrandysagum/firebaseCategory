import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import * as firebase from 'firebase';
import { Login } from  '../pages/login/login';
import { CategoryPage } from  '../pages/category/category';
import { Database } from '../fireframe/database';
import  { CategoryTest as categoryTest } from '../fireframe/randyTest/category-test';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = CategoryPage;

  constructor(platform: Platform) {
        console.log("Initializing Unit test...");
      let test = new categoryTest();
      console.log("Unit test start ::");
      test.test(x=> console.log('End of test'));
  }
}
