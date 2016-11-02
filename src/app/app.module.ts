import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from  '../pages/login/login';
import { CategoryPage } from  '../pages/category/category';
import { Register } from '../pages/register/register';
import { Database } from '../fireframe/database';
import {EditCategory} from '../components/category/edit-category/edit-category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    CategoryPage,
    EditCategory
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    CategoryPage,
    EditCategory
  ],
  providers: [Database  ]
})
export class AppModule {}
