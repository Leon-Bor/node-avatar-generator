import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedAvatarComponent } from './generated-avatar.component';

describe('GeneratedAvatarComponent', () => {
  let component: GeneratedAvatarComponent;
  let fixture: ComponentFixture<GeneratedAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
