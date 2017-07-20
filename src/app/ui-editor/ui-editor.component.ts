import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolsComponent } from '../editor-tools/editor-tools.component';
import {EditorToolConfiguration} from '../editor-tools/editor-tools.configuration';

@Component({
  selector: 'app-ui-editor',  
  templateUrl: './ui-editor.component.html',
  styleUrls: ['./ui-editor.component.css']  
})
export class UiEditorComponent implements OnInit {

  public editorContent: string = "ui-editor works!"; // Web content to be shown on the html page

  constructor(
      private toolsConfiguration: EditorToolConfiguration //Setting the configuration to show or hide editor controls on the UI through tools
    ) { 
    toolsConfiguration.isBold = true;   
    toolsConfiguration.isItalic = true;    
    toolsConfiguration.isUnderline = true;
    toolsConfiguration.isBullet = true;
    toolsConfiguration.isUndo = true;
    toolsConfiguration.isRedo = true;
  }


   ngOnInit(){
     console.log(this.editorContent);
   }

   saveData()
   {
      console.log(this.editorContent);      
   }
}
