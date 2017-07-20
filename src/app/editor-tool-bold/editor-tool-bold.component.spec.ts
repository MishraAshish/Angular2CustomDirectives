import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolBoldComponent } from './editor-tool-bold.component';

describe('EditorToolBoldComponent', () => {
  let component: EditorToolBoldComponent;
  let fixture: ComponentFixture<EditorToolBoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolBoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
