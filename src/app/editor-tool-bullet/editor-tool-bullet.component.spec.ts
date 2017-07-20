import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorToolBulletComponent } from './editor-tool-bullet.component';

describe('EditorToolBulletComponent', () => {
  let component: EditorToolBulletComponent;
  let fixture: ComponentFixture<EditorToolBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorToolBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorToolBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
