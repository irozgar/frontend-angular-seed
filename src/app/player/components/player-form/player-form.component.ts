import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Player } from '../../entities';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  @Input() private player: Player;
  @Output() private create = new EventEmitter<Player>();
  @Output() private update = new EventEmitter<Player>();
  @Output() private cancel = new EventEmitter();

  public playerForm: FormGroup;
  public submitted = false;
  public exists = false;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  public onCreate(): void {
    const { value, valid } = this.playerForm;
    this.submitted = true;
    if (valid) {
      this.create.emit(Player.fromJSON(value));
    }
  }

  public onUpdate(): void {
    const { value, valid } = this.playerForm;
    this.submitted = true;
    if (valid) {
      this.update.emit(Player.fromJSON(value));
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public isInvalid(field): boolean {
    return this.playerForm.controls[field].invalid && this.submitted;
  }

  private initForm(): void {
    this.playerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$')]],
    });

    if (this.player && this.player.id) {
      this.exists = true;
      this.playerForm.patchValue(this.player);
    }
  }
}
