import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-editor-tool-undo',
  templateUrl: './editor-tool-undo.component.html',
  styleUrls: ['./editor-tool-undo.component.css']
})
export class EditorToolUndoComponent implements OnInit {

  @Input() changedContent;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
  }

  // Undoes the changes made in editable document mode (need to add logic to check for any change made through external entity (+) and undo that)
  SetUndo(){      
      document.execCommand("undo",false,null);      
  }

}
