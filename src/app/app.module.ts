import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UiEditorComponent } from './ui-editor/ui-editor.component';
import { EditorToolsComponent } from './editor-tools/editor-tools.component';
import { MakeBoldDirective } from './make-bold.directive';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"editor", component:UiEditorComponent}
    ])
  ],
  declarations: [
    AppComponent,
    UiEditorComponent,
    EditorToolsComponent,
    MakeBoldDirective
  ],
  
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
