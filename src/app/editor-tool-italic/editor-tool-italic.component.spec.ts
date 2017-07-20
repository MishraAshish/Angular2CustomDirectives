import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolItalicComponent } from './editor-tool-italic.component';

describe('EditorToolItalicComponent', () => {
  let component: EditorToolItalicComponent;
  let fixture: ComponentFixture<EditorToolItalicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolItalicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolItalicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
