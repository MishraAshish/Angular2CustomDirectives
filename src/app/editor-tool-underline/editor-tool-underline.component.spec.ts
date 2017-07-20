import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolUnderlineComponent } from './editor-tool-underline.component';

describe('EditorToolUnderlineComponent', () => {
  let component: EditorToolUnderlineComponent;
  let fixture: ComponentFixture<EditorToolUnderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolUnderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
