import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewFormService {

  constructor() { }

  showPreview(){
    console.log("Preview");
  }
}
