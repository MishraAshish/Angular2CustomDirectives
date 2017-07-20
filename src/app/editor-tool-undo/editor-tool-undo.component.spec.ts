import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolUndoComponent } from './editor-tool-undo.component';

describe('EditorToolUndoComponent', () => {
  let component: EditorToolUndoComponent;
  let fixture: ComponentFixture<EditorToolUndoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolUndoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
