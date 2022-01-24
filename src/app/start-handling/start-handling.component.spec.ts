import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHandlingComponent } from './start-handling.component';

describe('StartHandlingComponent', () => {
  let component: StartHandlingComponent;
  let fixture: ComponentFixture<StartHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
