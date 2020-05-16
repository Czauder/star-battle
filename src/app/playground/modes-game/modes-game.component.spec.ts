import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModesGameComponent } from './modes-game.component';

describe('ModesGameComponent', () => {
  let component: ModesGameComponent;
  let fixture: ComponentFixture<ModesGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModesGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModesGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
