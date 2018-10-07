import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PlayerListComponent } from '../../components';

import { PlayerListPresenter } from './player-list.presenter';

describe('PlayerListPresenter', () => {
  let component: PlayerListPresenter;
  let fixture: ComponentFixture<PlayerListPresenter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerListComponent, PlayerListPresenter],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListPresenter);
    component = fixture.componentInstance;
    component.players$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
