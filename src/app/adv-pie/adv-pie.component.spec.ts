import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvPieComponent } from './adv-pie.component';

describe('AdvPieComponent', () => {
  let component: AdvPieComponent;
  let fixture: ComponentFixture<AdvPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
