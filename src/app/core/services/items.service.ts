import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { IEmployee } from '../../shared/interfaces/employees';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private selectedEmployee?: IEmployee;
  constructor() {}

  public getItems(): IEmployee[] {
    const itemDataString = localStorage.getItem('itemData');

    if (itemDataString) {
      return JSON.parse(itemDataString);
    } else {
      return [];
    }
  }

  public addNewItem(formData: Partial<IEmployee>): void {
    const existingData: IEmployee[] = this.getItems();

    const id = uuidv4();

    const newEmployee: IEmployee = {
      id,
      name: formData.name || null,
      surname: formData.surname || null,
      email: formData.email || null,
      phone: formData.phone || null,
      category: formData.category || null,
      info: formData.info || null,
    };

    existingData.push(newEmployee);

    localStorage.setItem('itemData', JSON.stringify(existingData));
  }

  public setSelectedEmployee(employee: IEmployee): void {
    this.selectedEmployee = employee;
  }

  public getSelectedEmployee(): IEmployee | null {
    return this.selectedEmployee ?? null;
  }

  public editItem(id: string, formData: Partial<IEmployee>): void {
    const existingData: IEmployee[] = this.getItems();
    const index = existingData.findIndex(item => item.id === id);

    if (index !== -1) {
      const editedEmployee: IEmployee = {
        ...existingData[index],
        ...formData,
      };

      existingData[index] = editedEmployee;
      localStorage.setItem('itemData', JSON.stringify(existingData));
    }
  }

  public removeItem(id: string): void {
    const existingData: IEmployee[] = this.getItems();
    const index = existingData.findIndex(item => item.id === id);
    if (index !== -1) {
      existingData.splice(index, 1);
      localStorage.setItem('itemData', JSON.stringify(existingData));
    }
  }
}
