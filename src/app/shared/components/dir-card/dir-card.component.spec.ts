import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirCardComponent } from './dir-card.component';

describe('DirCardComponent', () => {
  let component: DirCardComponent;
  let fixture: ComponentFixture<DirCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
