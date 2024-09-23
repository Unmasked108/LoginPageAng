import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBuyingComponent } from './car-buying.component';

describe('CarBuyingComponent', () => {
  let component: CarBuyingComponent;
  let fixture: ComponentFixture<CarBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarBuyingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
