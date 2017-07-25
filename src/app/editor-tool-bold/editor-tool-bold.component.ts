import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-tool-bold',
  templateUrl: './editor-tool-bold.component.html',
  styleUrls: ['./editor-tool-bold.component.css']
})
export class EditorToolBoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {} 

  Boldify(){
    document.execCommand("bold",false,null);        
  }
}
