import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefSkillsComponent } from './thief-skills.component';

describe('ThiefSkillsComponent', () => {
  let component: ThiefSkillsComponent;
  let fixture: ComponentFixture<ThiefSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiefSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
