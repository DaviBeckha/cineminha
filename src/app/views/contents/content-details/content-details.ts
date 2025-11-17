import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contents } from '../../../services/contents';
import { Reviews } from '../../../services/reviews';
import { ReviewFormComponent } from '../../../components/review-form/review-form';
import { ReviewItemComponent } from '../../../components/review-item/review-item';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './content-details.html',
  imports: [ReviewFormComponent, ReviewItemComponent, CommonModule],
  styleUrls: ['content-details.scss']
})
export class ContentDetailsComponent implements OnInit {
  content: any;
  reviews: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private contService: Contents,
    private reviewService: Reviews
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.contService.getById(id).subscribe(c => this.content = c);
    this.reviewService.getByContent(id).subscribe(r => this.reviews = r);
  }

  addReview(review: any) {
    review.contentId = this.content.id;
    this.reviewService.addReview(review).subscribe(() => {
      this.reviews.push(review);
    });
  }
}
