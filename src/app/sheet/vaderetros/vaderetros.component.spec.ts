import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaderetrosComponent } from './vaderetros.component';

describe('VaderetrosComponent', () => {
  let component: VaderetrosComponent;
  let fixture: ComponentFixture<VaderetrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaderetrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaderetrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
