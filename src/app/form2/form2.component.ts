import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NewFormService } from '../new-form.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(public newFor : NewFormService) { }

  @Input() drag1 : any;
  @Input() drag2 : any;

  ngOnInit() {
  }
  
}
