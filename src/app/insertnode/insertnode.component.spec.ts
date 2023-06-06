import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnodeComponent } from './insertnode.component';

describe('InsertnodeComponent', () => {
  let component: InsertnodeComponent;
  let fixture: ComponentFixture<InsertnodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertnodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
