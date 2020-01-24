import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGlRendererComponent } from './web-gl-renderer.component';

describe('WebGlRendererComponent', () => {
  let component: WebGlRendererComponent;
  let fixture: ComponentFixture<WebGlRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGlRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
