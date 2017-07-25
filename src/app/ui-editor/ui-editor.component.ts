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

  public editorContent: string ; // Web content to be shown on the html page
  public editorContentTemp: string = "Yes Temporary ui-editor works!";
  public toolsConfiguration: EditorToolConfiguration;

  constructor(private elementRef: ElementRef, //Element Class to get the exact emelent this component rendered upon
                private renderer: Renderer // To Be used to re-render the DOM after tweaks
                //private toolsConfiguration: EditorToolConfiguration //Setting the configuration to show or hide editor controls on the UI through tools
              )               
  { 
    // this.toolsConfiguration.isBold = true;   
    // this.toolsConfiguration.isItalic = true;    
    // this.toolsConfiguration.isUnderline = true;
    // this.toolsConfiguration.isBullet = true;
    // this.toolsConfiguration.isUndo = true;
    // this.toolsConfiguration.isRedo = true;
  }

   ngOnInit(){
      console.log(this.editorContent);
      this.toolsConfiguration = new EditorToolConfiguration();
      this.toolsConfiguration.isBold = true;   
      this.toolsConfiguration.isItalic = true;    
      this.toolsConfiguration.isUnderline = true;
      this.toolsConfiguration.isBullet = true;
      this.toolsConfiguration.isUndo = true;
      this.toolsConfiguration.isRedo = true;

      this.editorContent = "ui-editor works!";
   }

   //Below function to be used to get Html while saving
   saveData(event)
   {
      let editableContentColl = this.elementRef.nativeElement.querySelectorAll("div.editableContent");
      let newHtml = [];
      if(editableContentColl && editableContentColl.length > 0){
        for (var index = 0; index < editableContentColl.length; index++) {
          newHtml.push(editableContentColl[index].innerHTML);          
        }
      }
      alert(newHtml.join(""));
      //debugger;
      console.log(newHtml.join(""));      
   }  

   //Below function adds the selected html to the editable content
   addContent(event){
     let activeComponent = this.elementRef.nativeElement.parentElement.querySelector("DIV.editableContent[contenteditable='true']");

     if(activeComponent){               
        
        let range = document.createRange();
        var sel = window.getSelection();      
        range.setStart(activeComponent.childNodes[1], activeComponent.childNodes[1].length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);

        let target = event.target || event.srcElement || event.currentTarget;               
        document.execCommand('insertHTML', false, target.previousElementSibling.innerHTML);
        this.toolsConfiguration.setUndoRedo();
      }
   }
}
