import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoworkComponent } from './demowork.component';

describe('DemoworkComponent', () => {
  let component: DemoworkComponent;
  let fixture: ComponentFixture<DemoworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
