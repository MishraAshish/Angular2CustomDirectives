import {Injectable} from '@angular/core';

@Injectable()
export class EditorToolConfiguration {

  public isBold: boolean = false;
  public isItalic: boolean = false;
  public isUnderline: boolean = false;
  public isUndo: boolean = false;
  public isRedo: boolean = false;
  public isBullet: boolean = false;

  constructor(){
    // this.isBullet = true;
    // this.isBold = true;  
  }

  setUndoRedo(){
    let canUndo = document.execCommand("undo", false, null);
    let canRedo = document.execCommand("redo", false, null);
    
    let activeComponent = document.querySelector("DIV.editableContent[contenteditable='true']");
    let undoButton = activeComponent.previousElementSibling.querySelector("app-editor-tool-undo button");
    let redoButton = activeComponent.previousElementSibling.querySelector("app-editor-tool-redo button");
    
    //Undo Button Enable Disable
    if(undoButton && canUndo)
        (<HTMLInputElement>undoButton).disabled = false;
    else
        (<HTMLInputElement>undoButton).disabled = true;
    
    //Redo Button Enable Disable
    if(redoButton && canRedo)
        (<HTMLInputElement>redoButton).disabled = false;
    else
        (<HTMLInputElement>redoButton).disabled = true;
        
  }
}
