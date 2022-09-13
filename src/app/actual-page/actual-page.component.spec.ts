import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualPageComponent } from './actual-page.component';

describe('ActualPageComponent', () => {
  let component: ActualPageComponent;
  let fixture: ComponentFixture<ActualPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
