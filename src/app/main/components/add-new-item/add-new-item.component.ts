import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-new-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-new-item.component.html',
  styleUrl: './add-new-item.component.scss',
})
export class AddNewItemComponent {
  color = 'black';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    info: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }
}
