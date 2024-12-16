import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationNgComponent } from './pagination-ng.component';

describe('PaginationNgComponent', () => {
  let component: PaginationNgComponent;
  let fixture: ComponentFixture<PaginationNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationNgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
