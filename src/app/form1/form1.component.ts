import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NewFormService } from '../new-form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  title = 'Task2';

  Marvel = [
    'IronMan',
    'SpiderMan',
    'Captain America',
    'Thor',
    'Hulk'
  ];

  DC = [
    'Bruise Wayne',
    'Joker',
    'Batman',
    'Flash',
    'AquaMan'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  constructor(public newFor : NewFormService) { }

  ngOnInit() {
  }
  show(){
    this.newFor.showPreview();
  }


}
