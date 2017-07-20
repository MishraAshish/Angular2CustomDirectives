import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMakeBold]'
})
export class MakeBoldDirective {

  constructor(private el: ElementRef,private renderer: Renderer) {
      //debugger;
     // Use renderer to render the element with styles
       //renderer.setElementStyle(el.nativeElement, 'font-weight', 'bold');
    }
      
  @Input() appMakeBold: boolean;

    ngOnInit(){
        // Use renderer to render the emelemt with styles
        debugger;
        console.log(this.appMakeBold)
        if(this.appMakeBold) {
            console.log('hide');
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }else{
          this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
        }
    }
}
