import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IEmployee } from '../../../shared/interfaces/employees';

import { ItemsService } from '../../../core/services/items.service';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-new-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-new-item.component.html',
  styleUrl: './add-new-item.component.scss',
})
export class AddNewItemComponent {
  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^\+?\d+$/),
    ]),
    category: new FormControl('', Validators.required),
    info: new FormControl(''),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      this.itemsService.addNewItem(this.profileForm.value as IEmployee);
      this.router.navigate(['/']);
    }
    this.profileForm.reset();
  }
}
