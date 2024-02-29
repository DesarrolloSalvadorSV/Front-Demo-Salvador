import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCodePromoComponent } from './generate-code-promo.component';

describe('GenerateCodePromoComponent', () => {
  let component: GenerateCodePromoComponent;
  let fixture: ComponentFixture<GenerateCodePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCodePromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCodePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
