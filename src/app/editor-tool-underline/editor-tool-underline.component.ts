import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-tool-underline',
  templateUrl: './editor-tool-underline.component.html',
  styleUrls: ['./editor-tool-underline.component.css']
})
export class EditorToolUnderlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Underline(){
    document.execCommand("underline",false,null);
  }
  
}
