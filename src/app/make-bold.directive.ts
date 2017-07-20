import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeBold]'
})

export class MakeBoldDirective {
  
  //@Input('appMakeBold') makeBold: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
     //debugger;
     // Use renderer to render the element with styles
     //renderer.setElementStyle(el.nativeElement, 'font-weight', 'bold');
  }   

  @HostListener('click') click() {  
    debugger;
    if(this.el.nativeElement.contentEditable != true || this.el.nativeElement.contentEditable != "true")
    {
      this.el.nativeElement.contentEditable = true;
    }    
  }

  @HostListener('onmouseleave') onMouseLeave() {   
      this.el.nativeElement.contentEditable = false;
  }

  // ngOnInit(){
  //     // Use renderer to render the emelemt with styles
  //     debugger;
  //     console.log(this.appMakeBold)
  //     if(this.appMakeBold) {
  //         console.log('hide');
  //         this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  //     }else{
  //       this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
  //     }
  //}
}
