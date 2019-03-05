import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsectionComponent } from './readingsection.component';

describe('ReadingsectionComponent', () => {
  let component: ReadingsectionComponent;
  let fixture: ComponentFixture<ReadingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
