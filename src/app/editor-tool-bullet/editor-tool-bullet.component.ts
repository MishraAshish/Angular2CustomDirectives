import { Component, OnInit } from '@angular/core';
import { EditorToolConfiguration } from '../editor-tools/editor-tools.configuration';

@Component({
  selector: 'app-editor-tool-bullet',
  templateUrl: './editor-tool-bullet.component.html',
  styleUrls: ['./editor-tool-bullet.component.css']
})
export class EditorToolBulletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }  
  
  //This is working quite close to expectation
  SetBulleted(){      
      document.execCommand("insertUnorderedList",false,null);      
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();      
  }

  //This is working quite close to expectation
  SetLeft(){      
      document.execCommand("justifyLeft",false,null);      
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();      
  }

  //This is working quite close to expectation
  SetRight(){      
      document.execCommand("justifyRight",false,null);      
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();      
  }

  //This is working quite close to expectation
  SetCenter(){      
      document.execCommand("justifyCenter",false,null);      
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();      
  }

     //This is working quite close to expectation
  SetFull(){      
      document.execCommand("justifyFull",false,null);      
      let editorToolConfiguration = new EditorToolConfiguration();
      editorToolConfiguration.setUndoRedo();      
  }


  getCursorPosition() {
    // Declare a tuple type
    let cursorObj: [any, any] = [null, null];
    let selectedRange : any;
    selectedRange = window.getSelection();
    if (selectedRange.getRangeAt && selectedRange.rangeCount) {
        cursorObj[0] = selectedRange;
        cursorObj[1] = selectedRange.getRangeAt(0);
        return cursorObj;
    }
  }

  Bulleted(){
    // let getPos =  this.getCursorPosition();
      // let selectedRange = getPos[1];
      // let selectD = getPos[0];

      // if(selectedRange && selectedRange.startContainer && selectD.baseNode && selectD.baseNode.parentElement && selectD.baseNode.parentElement.parentElement &&
      //   selectD.baseNode.parentElement.parentElement.className == "editableContent")
      // {        
      //   let currentData = selectedRange.startContainer.data;        
      //   if(currentData.indexOf("\u2022") > -1)
      //     selectedRange.startContainer.data = currentData.replace("\u2022 ","");
      //   else
      //     selectedRange.startContainer.data = "\u2022 " + currentData;
      // }
      // else{
      //   let currentElement = this.elementRef.nativeElement.parentNode.querySelector('p');
      //   if(this.isBulleted){
      //     this.isBulleted = false;    
      //     this.elementRef.nativeElement.parentNode.querySelector('p').innerText = currentElement.innerText.replace("\u2022 ","");
      //   }else{
      //     this.elementRef.nativeElement.parentNode.querySelector('p').innerText = '\u2022 ' + currentElement.innerText;
      //     this.isBulleted = true;
      //   }
      // }
  }
  MakeBold(){
    // let getPos =  this.getCursorPosition();
    // let selectedRange = getPos[1];
    // let selectD = getPos[0];
    // //True Logic to implement bold and unbold selected content
    // debugger;
    // if(selectedRange && selectedRange.startContainer && selectD.baseNode && selectD.baseNode.parentElement && selectD.baseNode.parentElement.parentElement &&
    //     selectD.baseNode.parentElement.parentElement.className == "editableContent")
    // {        
    //     let currentData = selectedRange.startContainer.parentElement.innerHTML;
    //     let offset = selectedRange.endOffset;
    //       if(selectedRange.endContainer.data.length < currentData.length){
    //          offset  = currentData.indexOf("</b>") + 4;
    //     }        
    //     if(currentData.length > 0 && offset > 0 && (selectedRange.startOffset < offset))
    //     {
    //       debugger;          

    //       currentData = currentData.slice(0,selectedRange.startOffset) + "<b>" + 
    //                     currentData.slice(selectedRange.startOffset, offset) + "</b>" +
    //                     ( offset < currentData.length ?          
    //                       currentData.slice(offset,currentData.length) : "");
          
    //       //currentData = currentData.splice(selectedRange.endOffset + 3,"3","</b>");
    //       selectedRange.startContainer.parentNode.innerHTML = currentData;
    //     }
    // }
  } 
}
