import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnodeComponent } from './productnode.component';

describe('ProductnodeComponent', () => {
  let component: ProductnodeComponent;
  let fixture: ComponentFixture<ProductnodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductnodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
