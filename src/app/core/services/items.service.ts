import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IEmployee } from '../../shared/interfaces/employees';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  public getItems(): IEmployee[] {
    const itemDataString = localStorage.getItem('itemData');

    if (itemDataString) {
      return JSON.parse(itemDataString);
    } else {
      return [];
    }
  }

  public addNewItem(formData: IEmployee): void {
    const existingData: IEmployee[] = this.getItems();

    const id = uuidv4();

    const newItem: IEmployee = { ...formData, id };

    existingData.push(newItem);

    localStorage.setItem('itemData', JSON.stringify(existingData));
  }

  public editItem() {}

  public removeItem(id: number) {
    const existingData: IEmployee[] = this.getItems();
    existingData.splice(id, 1);
    localStorage.setItem('itemData', JSON.stringify(existingData));
  }
}
