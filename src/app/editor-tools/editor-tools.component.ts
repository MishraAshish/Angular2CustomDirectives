import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'editor-tools',
  templateUrl: './editor-tools.component.html',
  styleUrls: ['./editor-tools.component.css']
})

export class EditorToolsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  private componentElement: any;  
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2){
      //el = elementRef.nativeElement;
      this.componentElement = renderer.selectRootElement(this); //will have component root element
   }
  

  Boldify(isBold){
    debugger;
    if(isBold){
      isBold = false;
    }else{
      isBold = true;
    }
    //this.elementRef.nativeElement.parentElement.children[1].setAttribute("ng-reflect-app-make-bold",true);
    //console.log("Boldified"+ this.componentElement);
  }
}
