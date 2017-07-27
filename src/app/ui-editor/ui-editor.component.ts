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
      let editableContentColl = this.elementRef.nativeElement.querySelectorAll("editor-tools .editableContent");
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

   getTopNode(activeComponent: any){
      if (activeComponent) {
        if(activeComponent.childNodes && activeComponent.childNodes.length > 0){
            let nodeLength = activeComponent.childNodes.length - 1;            
            if (activeComponent.childNodes[nodeLength].nodeType == 3 || activeComponent.childNodes[nodeLength].nodeName == "BR") {
              return activeComponent.childNodes[nodeLength];
            } else {
              this.getTopNode(activeComponent.childNodes[nodeLength]);
            }
        } else {
          return activeComponent;
        }
      }
   }

   //Below function adds the selected html to the editable content
   addContent(event){
    //debugger;
    let activeComponent = this.elementRef.nativeElement.parentElement.querySelector("editor-tools .editableContent[contenteditable='true']");
    let target = event.target || event.srcElement || event.currentTarget;

     if(activeComponent){               
        
        let range = document.createRange();
        var sel = window.getSelection();

        let myNode = this.getTopNode(activeComponent);
        
        if (myNode) {
          range.setStart(myNode, myNode.textContent.length);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);  
        }       

        let target = event.target || event.srcElement || event.currentTarget;               
        document.execCommand('insertHTML', false, target.previousElementSibling.innerHTML);
        this.toolsConfiguration.setUndoRedo();
      }
   }
}


// Deprecated code

//Below Logic needs to be rectified and optimized once identified all the use cases
//debugger;

// if(activeComponent.childNodes && activeComponent.childNodes.length > 0){
//   let currentLength = activeComponent.childNodes.length - 1;
//   if(activeComponent.childNodes[currentLength].nodeName == "UL" || 
//     (activeComponent.childNodes[currentLength].innerHTML && 
//       activeComponent.childNodes[currentLength].innerHTML.toUpperCase().indexOf("<UL>") > -1))
//   {            
//     let topNode = activeComponent.childNodes[currentLength];
//     let topNodeLength = topNode.childNodes.length - 1;

//     if (topNode.childNodes[topNodeLength].nodeName == "UL") 
//     {
//         topNode = topNode.childNodes[topNodeLength];
        
//         let LINodes = topNode.childNodes;
//         let newLength = LINodes.length - 1;
        
//         if (LINodes[newLength].childNodes.length > 0) {
//           let lnth = LINodes[newLength].childNodes.length-1;
//           if (LINodes[newLength].childNodes[lnth] && 
//             (LINodes[newLength].childNodes[lnth].childNodes == undefined || LINodes[newLength].childNodes[lnth].childNodes.length == 0 )) {                    
//             range.setStart(LINodes[newLength].childNodes[lnth], 
//                 (LINodes[newLength].childNodes[lnth].innerText != undefined ? 
//                   LINodes[newLength].childNodes[lnth].innerText.length : LINodes[newLength].childNodes[lnth].textContent.length));  
//           } 
//           else if(LINodes[newLength].childNodes[lnth].childNodes.length > 0) {
//             let newlnth = LINodes[newLength].childNodes[lnth].childNodes.length - 1;
//             range.setStart(LINodes[newLength].childNodes[lnth].childNodes[newlnth], 
//               LINodes[newLength].childNodes[lnth].childNodes[newlnth].innerText != undefined ?
//               LINodes[newLength].childNodes[lnth].childNodes[newlnth].innerText.length : LINodes[newLength].childNodes[lnth].childNodes[newlnth].textContent.length );  
//           }                  
//         }else{                
//           range.setStart(LINodes[newLength].childNodes[0], LINodes[newLength].childNodes[0].innerText.length);
//         }
//     } 
//     else {
//       if(topNode.childNodes[topNodeLength].innerText && topNode.childNodes[topNodeLength].innerText.trim() != ""){                
//         range.setStart(topNode.childNodes[topNodeLength].childNodes[0], topNode.childNodes[topNodeLength].innerText.length);
//       } else{
//         range.setStart(topNode.childNodes[topNodeLength], topNode.childNodes[topNodeLength].textContent.length);              
//       }   
//     }     
//   } else {
//     if(activeComponent.childNodes[currentLength].innerText && activeComponent.childNodes[currentLength].innerText.trim() != ""){
//       let lnth = activeComponent.childNodes[currentLength].childNodes.length - 1;
//       if (activeComponent.childNodes[currentLength].childNodes[lnth].hasChildNodes()) {
//         let currenNode = activeComponent.childNodes[currentLength].childNodes[lnth].childNodes;
//         lnth = currenNode.length - 1;                
//         range.setStart(currenNode[lnth], currenNode[lnth].textContent.length);
//       } else {
//         range.setStart(activeComponent.childNodes[currentLength].childNodes[lnth], activeComponent.childNodes[currentLength].childNodes[lnth].textContent.length);
//     }
//     }else{
//       range.setStart(activeComponent.childNodes[currentLength], activeComponent.childNodes[currentLength].textContent.length);              
//     }
//   }
// }       