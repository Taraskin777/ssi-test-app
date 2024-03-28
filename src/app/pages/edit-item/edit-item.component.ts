import { Component } from '@angular/core';
import { EditCurrentItemComponent } from '../../main/components/edit-current-item/edit-current-item.component';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [EditCurrentItemComponent],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss',
})
export class EditItemComponent {}
