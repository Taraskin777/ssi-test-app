import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrentItemComponent } from './edit-current-item.component';

describe('EditCurrentItemComponent', () => {
  let component: EditCurrentItemComponent;
  let fixture: ComponentFixture<EditCurrentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCurrentItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCurrentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
