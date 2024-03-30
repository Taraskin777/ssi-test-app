import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { ItemslistComponent } from '../../main/components/itemslist/itemslist.component';

@Component({
  selector: 'app-list-of-items',
  standalone: true,
  imports: [ItemslistComponent, RouterLink, MatButton],
  templateUrl: './list-of-items.component.html',
  styleUrl: './list-of-items.component.scss',
})
export class ListOfItemsComponent {}
