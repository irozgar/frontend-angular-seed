import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { PlayerFormComponent } from '../../components';

import { PlayerItemPresenter } from './player-item.presenter';

describe('PlayerItemPresenter', () => {
  let component: PlayerItemPresenter;
  let fixture: ComponentFixture<PlayerItemPresenter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [PlayerFormComponent, PlayerItemPresenter],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemPresenter);
    component = fixture.componentInstance;
    component.player$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
