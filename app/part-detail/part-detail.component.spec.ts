import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDetailComponent } from './part-detail.component';

describe('PartDetailComponent', () => {
  let component: PartDetailComponent;
  let fixture: ComponentFixture<PartDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartDetailComponent]
    });
    fixture = TestBed.createComponent(PartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
