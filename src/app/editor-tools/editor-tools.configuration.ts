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
}
