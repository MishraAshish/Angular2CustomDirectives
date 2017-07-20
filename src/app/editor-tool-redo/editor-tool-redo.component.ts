import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-tool-redo',
  templateUrl: './editor-tool-redo.component.html',
  styleUrls: ['./editor-tool-redo.component.css']
})
export class EditorToolRedoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SetRedo(){
      document.execCommand("redo",false,null)
  }

}
