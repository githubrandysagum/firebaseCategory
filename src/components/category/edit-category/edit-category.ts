import { Component, EventEmitter } from '@angular/core';

/*
  Generated class for the EditCategory component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'edit-category',
  templateUrl: 'edit-category.html',
  outputs: ["onClickSaveEdit"]
})
export class EditCategory {
  public onClickSaveEdit = new EventEmitter<string>();

  id : string;
  name : string = "";
  title : string = "";

  constructor() {
      
       
   }

   onClickSave(){
     this.id = "Hello emitter!!!!";
      this.onClickSaveEdit.emit(this.id);
   }


}
