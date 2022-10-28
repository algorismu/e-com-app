import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePriceComponent } from './inline-price.component';

describe('InlinePriceComponent', () => {
  let component: InlinePriceComponent;
  let fixture: ComponentFixture<InlinePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
