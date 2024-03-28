import { Component } from '@angular/core';
import { AddNewItemComponent } from '../../main/components/add-new-item/add-new-item.component';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [AddNewItemComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
})
export class AddItemComponent {}
