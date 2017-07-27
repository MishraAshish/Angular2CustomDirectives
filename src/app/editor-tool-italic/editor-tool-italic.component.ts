import { Component, OnInit } from '@angular/core';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

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
    let editorToolConfiguration = new EditorToolConfiguration();
    editorToolConfiguration.setUndoRedo();
  }

}
