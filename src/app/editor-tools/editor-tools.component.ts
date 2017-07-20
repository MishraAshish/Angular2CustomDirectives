import { Component, OnInit, Renderer, ElementRef, HostListener} from '@angular/core';
import {EditorToolConfiguration} from './editor-tools.configuration';

@Component({
  selector: 'editor-tools',
  templateUrl: './editor-tools.component.html',
  styleUrls: ['./editor-tools.component.css']  
})

export class EditorToolsComponent implements OnInit {

  ngOnInit(){}   

  private componentElement: any;  
  private isEditing: boolean; // Defaults to False   

  constructor(  private elementRef: ElementRef, //Element Class to get the exact emelent this component rendered upon
                private renderer: Renderer, // To Be used to re-render the DOM after tweaks
                public toolsConfiguration: EditorToolConfiguration // Components class to set what components can be shown or hidden on the UI
              )
  {      
      this.componentElement = renderer.selectRootElement(this); //will have component root element     
  }

  
   @HostListener('click') click() {
      if(this.isEditing != true)
      {
        let contentElement = this.elementRef.nativeElement.querySelector("DIV.editableContent");
        contentElement.contentEditable = true;
        contentElement.focus();
        this.isEditing = true;     
      }    
  }

  // Needs Little more modification for further use
  focusOutFunction(evt) {    
      //     this.elementRef.nativeElement.querySelector("DIV.editableContent").contentEditable = false;     
      //     this.isEditing = false;
      //     //this.elementRef.nativeElement.contentEditable = false;
      //     //this.elementRef.nativeElement.children.contentEditable = false;
      //     //this.elementRef.nativeElement.querySelectorAll("p").contentEditable = false;
      //     //this.isEditing = false;
      //     // let localParagraphs = this.elementRef.nativeElement.querySelectorAll("p");
      //     // for(let i=0; i < localParagraphs.length; i++)
      //     // {
      //     //   localParagraphs[i].contentEditable = false;
      //     //   this.isEditing = false;
      //     // }
  }  
}
