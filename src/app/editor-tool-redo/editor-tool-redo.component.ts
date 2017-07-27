import { Component, OnInit, Input } from '@angular/core';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

@Component({
  selector: 'app-editor-tool-redo',
  templateUrl: './editor-tool-redo.component.html',
  styleUrls: ['./editor-tool-redo.component.css']
})
export class EditorToolRedoComponent implements OnInit {
  
  @Input() changedContent;
  constructor() { }

  ngOnInit() {
  }

  SetRedo(){        
      document.execCommand("redo",false,null);
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();
  }

}
