import { Component, OnInit } from '@angular/core';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

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
    let editorToolConfiguration = new EditorToolConfiguration();
    editorToolConfiguration.setUndoRedo();
  }
}
