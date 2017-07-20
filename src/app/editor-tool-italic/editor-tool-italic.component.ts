import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-tool-italic',
  templateUrl: './editor-tool-italic.component.html',
  styleUrls: ['./editor-tool-italic.component.css']
})
export class EditorToolItalicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   Italify(){
    document.execCommand("italic",false,null);
  }

}
