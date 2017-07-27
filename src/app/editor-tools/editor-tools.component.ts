import { Component, OnInit, Renderer, ElementRef, HostListener, Input} from '@angular/core';
import {EditorToolConfiguration} from './editor-tools.configuration';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'editor-tools',
  templateUrl: './editor-tools.component.html',
  styleUrls: ['./editor-tools.component.css']  
})

export class EditorToolsComponent implements OnInit { 

  private componentElement: any;
  public changedContent : [any];
  @Input() toolsConfiguration : EditorToolConfiguration;
  @Input() editorContent : string;

  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();
  


  constructor ( private elementRef: ElementRef, //Element Class to get the exact emelent this component rendered upon
                private renderer: Renderer // To Be used to re-render the DOM after tweaks
                //public toolsConfiguration: EditorToolConfiguration // Components class to set what components can be shown or hidden on the UI                
              )
  {      
      this.componentElement = renderer.selectRootElement(this); //will have component root element     
  }

  ngOnInit(){
    console.log(this.editorContent);
  }

  @HostListener('click') click() {
    let contentElement = this.elementRef.nativeElement.querySelector("editor-tools .editableContent");
      
    let undoButton = contentElement.previousElementSibling.querySelector("app-editor-tool-undo button");         

    if(contentElement && contentElement.contentEditable != "true")
    {        
      let activeComponents = this.elementRef.nativeElement.parentElement.querySelectorAll("editor-tools .editableContent[contenteditable='true']");        
      if(activeComponents && activeComponents.length > 0)
      {
        let loopLength = activeComponents.length;
        for (var index = 0; index < loopLength; index++) {
            var currentElement = activeComponents[index];
            currentElement.contentEditable = false;
            this.renderer.setElementClass(currentElement.previousElementSibling, "dn", true);
        }  
      }
      contentElement.contentEditable = true;
      contentElement.focus();
      this.renderer.setElementClass(contentElement.previousElementSibling, "dn", false);        
    }           
  }

  @HostListener('keyup', ['$event']) keyup(e) {    
      this.toolsConfiguration.setUndoRedo();
  }

  // Needs Little more modification for further use
  focusOutFunction(evt) {            
      //console.log(this.editorContent);      
      //console.log(evt.target.innerHTML);
      //this.editorContent = "This is a new text implemented";
      // let activeComponents = this.elementRef.nativeElement.parentElement.querySelectorAll("DIV.editableContent[contenteditable='true']");
      //alert(this.editorContent);
      //this.elementRef.nativeElement.querySelector("DIV.editableContent").contentEditable = false;     
      //this.isEditing = false;      
  }

}
