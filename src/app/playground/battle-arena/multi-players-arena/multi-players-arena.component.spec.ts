import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayersArenaComponent } from './multi-players-arena.component';

describe('MultiPlayersArenaComponent', () => {
  let component: MultiPlayersArenaComponent;
  let fixture: ComponentFixture<MultiPlayersArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayersArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayersArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
