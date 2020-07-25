import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySubGridComponent } from './story-sub-grid.component';

describe('StorySubGridComponent', () => {
  let component: StorySubGridComponent;
  let fixture: ComponentFixture<StorySubGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StorySubGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySubGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
