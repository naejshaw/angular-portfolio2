import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsButtonComponent } from './dots-button.component';

describe('DotsButtonComponent', () => {
  let component: DotsButtonComponent;
  let fixture: ComponentFixture<DotsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
