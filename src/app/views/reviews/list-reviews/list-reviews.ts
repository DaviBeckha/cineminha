import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../../services/reviews';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list-reviews',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-reviews.html',
  styleUrls: ['./list-reviews.scss']
})
export class ListReviewsComponent implements OnInit {
  reviews: any[] = [];

  constructor(private service: Reviews) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(r => this.reviews = r);
  }
}
