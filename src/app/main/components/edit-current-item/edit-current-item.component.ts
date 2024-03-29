import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-edit-current-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-current-item.component.html',
  styleUrl: './edit-current-item.component.scss',
})
export class EditCurrentItemComponent implements OnInit {
  selectedEmployee: IEmployee | null = null;
  employeeForm: FormGroup = new FormGroup({});

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedEmployee = this.itemsService.getSelectedEmployee();
    this.employeeForm = new FormGroup({
      name: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.name : '',
        Validators.required
      ),
      surname: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.surname : '',
        Validators.required
      ),
      email: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.email : '',
        [Validators.required, Validators.email]
      ),
      phone: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.phone : '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^\+?\d+$/),
        ]
      ),
      category: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.category : '',
        Validators.required
      ),
      info: new FormControl(
        this.selectedEmployee ? this.selectedEmployee.info : ''
      ),
    });
  }
}
