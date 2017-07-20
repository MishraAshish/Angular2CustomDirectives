import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-tool-undo',
  templateUrl: './editor-tool-undo.component.html',
  styleUrls: ['./editor-tool-undo.component.css']
})
export class EditorToolUndoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SetUndo(){
      document.execCommand("undo",false,null)
  }

}
