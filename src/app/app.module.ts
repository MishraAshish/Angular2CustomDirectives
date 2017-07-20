import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiEditorComponent } from './ui-editor/ui-editor.component';
import { EditorToolsComponent } from './editor-tools/editor-tools.component';
import { EditorToolConfiguration } from './editor-tools/editor-tools.configuration';
import { MakeBoldDirective } from './make-bold.directive';
import { EditorToolBoldComponent } from './editor-tool-bold/editor-tool-bold.component';
import { EditorToolBulletComponent } from './editor-tool-bullet/editor-tool-bullet.component';
import { EditorToolItalicComponent } from './editor-tool-italic/editor-tool-italic.component';
import { EditorToolUnderlineComponent } from './editor-tool-underline/editor-tool-underline.component';
import { EditorToolUndoComponent } from './editor-tool-undo/editor-tool-undo.component';
import { EditorToolRedoComponent } from './editor-tool-redo/editor-tool-redo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"editor", component:UiEditorComponent}
    ])
  ],
  declarations: [
    AppComponent,
    UiEditorComponent,
    EditorToolsComponent,
    MakeBoldDirective,
    EditorToolBoldComponent,
    EditorToolBulletComponent,
    EditorToolItalicComponent,
    EditorToolUnderlineComponent,
    EditorToolUndoComponent,
    EditorToolRedoComponent    
  ],
  
  providers: [EditorToolConfiguration],// a sepate class of configurations to injected in editor-tools component
  bootstrap: [AppComponent]  
})
export class AppModule { }
