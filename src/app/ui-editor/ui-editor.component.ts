import { Component, OnInit, ElementRef, Renderer} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorToolsComponent } from '../editor-tools/editor-tools.component';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

@Component({
  selector: 'app-ui-editor',  
  templateUrl: './ui-editor.component.html',
  styleUrls: ['./ui-editor.component.css']    
})
export class UiEditorComponent implements OnInit {

  public editorContent: string = "ui-editor works!"; // Web content to be shown on the html page

  public editorContentTemp: string = "Yes Temporary ui-editor works!";

  constructor(private elementRef: ElementRef, //Element Class to get the exact emelent this component rendered upon
                private renderer: Renderer, // To Be used to re-render the DOM after tweaks
                private toolsConfiguration: EditorToolConfiguration) //Setting the configuration to show or hide editor controls on the UI through tools
  { 
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

   addContent(){
     var activeComponent = this.elementRef.nativeElement.parentElement.querySelector("DIV.editableContent[contenteditable='true']");
     activeComponent.innerHTML = activeComponent.innerHTML + "<b>Test Me</b>";
     debugger;
   }
}
