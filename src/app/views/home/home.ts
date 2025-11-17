import { Component, OnInit } from '@angular/core';
import { Contents } from '../../services/contents';
import { Categories } from '../../services/categories';
import { CommonModule } from '@angular/common';
import { CardCategoryComponent } from '../../components/card-category/card-category';
import { CardContentComponent } from '../../components/card-content/card-content';
import { Router } from '@angular/router';


@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule, CardCategoryComponent, CardContentComponent]
})
export class HomePageComponent implements OnInit {
  featured: any;
  categories: any[] = [];
  trending: any[] = [];
  
  constructor(
    private contentsService: Contents,
    private categoriesService: Categories,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contentsService.getAll().subscribe(list => {
      this.featured = list.find(c => c.featured);
      this.trending = list.sort((a, b) => b.views - a.views).slice(0, 10);
    });

    this.categoriesService.getAll().subscribe(c => this.categories = c);
  }

  goToReviews() {
  this.router.navigate(['/reviews']);
}
}
