import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import {Database} from '../../fireframe/database';
import {Category} from '../../fireframe/Category';
import {EditCategory} from '../../components/category/edit-category/edit-category';
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
 
  id : string = "";
  name : string = "";
  title : string = "";

  constructor( private db : Database) {

     //statement here
  }

  getId(id){
    console.log(id);
    this.id = id;
  }

  onClickSave(){
   let category = new Category("CategoryParent");
 
    category
      .set('id', this.id)
      .set('name', this.name)
      .set('title', this.title)
      .create( s => {

        category.get( 'talk', s => {     // this will return the created value
          console.log('success', s);
        },
        e => {
          console.log('success', e);
        });

      }, e => console.log( e ) );

  }

}
