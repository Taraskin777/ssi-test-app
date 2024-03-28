import { Component } from '@angular/core';
import { ItemslistComponent } from '../../main/components/itemslist/itemslist.component';

@Component({
  selector: 'app-list-of-items',
  standalone: true,
  imports: [ItemslistComponent],
  templateUrl: './list-of-items.component.html',
  styleUrl: './list-of-items.component.scss',
})
export class ListOfItemsComponent {}
