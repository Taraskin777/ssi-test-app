import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ItemsService } from '../../../core/services/items.service';
import { IEmployee } from '../../../shared/interfaces/employees';
import { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-itemslist',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './itemslist.component.html',
  styleUrl: './itemslist.component.scss',
})
export class ItemslistComponent implements OnInit {
  listOfEmployees: IEmployee[] = [];
  keys: string[] = [];

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listOfEmployees = this.itemsService.getItems();
  }

  editItem(id: string): void {
    const employee = this.listOfEmployees.find(emp => emp.id === id);
    if (employee) {
      this.itemsService.setSelectedEmployee(employee);
      this.router.navigate(['/edit-item']);
    }
  }

  deleteItem(id: string): void {
    this.itemsService.removeItem(id);
    this.listOfEmployees = this.itemsService.getItems();
  }

  trackByEmployee(index: number, item: IEmployee): string {
    return item.id;
  }
}
