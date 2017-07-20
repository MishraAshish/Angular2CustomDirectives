import { Component, OnInit } from '@angular/core';

import { EditorToolsComponent } from '../editor-tools/editor-tools.component';

@Component({
  selector: 'app-ui-editor',  
  templateUrl: './ui-editor.component.html',
  styleUrls: ['./ui-editor.component.css']  
})
export class UiEditorComponent {
  
  isBold: boolean = true;

  constructor() { }

}
