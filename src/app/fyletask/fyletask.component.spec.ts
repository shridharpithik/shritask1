import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyletaskComponent } from './fyletask.component';

describe('FyletaskComponent', () => {
  let component: FyletaskComponent;
  let fixture: ComponentFixture<FyletaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyletaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
