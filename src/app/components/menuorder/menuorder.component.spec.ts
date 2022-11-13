import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuorderComponent } from './menuorder.component';

describe('MenuorderComponent', () => {
  let component: MenuorderComponent;
  let fixture: ComponentFixture<MenuorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
