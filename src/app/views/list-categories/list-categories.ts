import { Component, OnInit } from '@angular/core';
import { Categories } from '../../services/categories';
import { CardCategoryComponent } from '../../components/card-category/card-category';

@Component({
  templateUrl: './list-categories.html',
  standalone: true,
  imports: [CardCategoryComponent]
})
export class ListCategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private service: Categories) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => this.categories = data);
  }
}
