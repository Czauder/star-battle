import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerArenaComponent } from './single-player-arena.component';

describe('SinglePlayerArenaComponent', () => {
  let component: SinglePlayerArenaComponent;
  let fixture: ComponentFixture<SinglePlayerArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlayerArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
