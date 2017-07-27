import { Component, OnInit } from '@angular/core';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

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
    let editorToolConfiguration = new EditorToolConfiguration();
    editorToolConfiguration.setUndoRedo();
  }
  
}
