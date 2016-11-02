import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Login } from '../login/login';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth:any;
  constructor(private navCtrl: NavController ) {
   // this.auth = firebase.auth();
     this.navCtrl.setRoot( CategoryPage );
  }

onClickLogout(){
  this.auth.signOut();
  this.navCtrl.setRoot( CategoryPage );
}

}
