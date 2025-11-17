import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../../services/categories';
import { Contents } from '../../services/contents';
import { CardContentComponent } from '../../components/card-content/card-content';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './category-details.html',
  imports: [CommonModule, CardContentComponent],
  standalone: true
})
export class CategoryDetailsComponent implements OnInit {
  category: any;
  contents: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private catService: Categories,
    private contService: Contents
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.catService.getById(id).subscribe(c => this.category = c);
    this.contService.getByCategory(id).subscribe(c => this.contents = c);
  }
}
