import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodeInputComponent } from './add-node-input.component';

describe('AddNodeInputComponent', () => {
  let component: AddNodeInputComponent;
  let fixture: ComponentFixture<AddNodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
