import { Component, Input } from '@angular/core';
import { Category } from '../../shared/models/category';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.html',
  standalone: true,
  imports: [RouterModule], 
  styleUrls: ['./card-category.scss']
})
export class CardCategoryComponent {
  @Input() category!: Category;
}
