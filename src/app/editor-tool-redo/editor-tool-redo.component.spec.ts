import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolRedoComponent } from './editor-tool-redo.component';

describe('EditorToolRedoComponent', () => {
  let component: EditorToolRedoComponent;
  let fixture: ComponentFixture<EditorToolRedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolRedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolRedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
