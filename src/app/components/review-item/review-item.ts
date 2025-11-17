import { Component, Input } from '@angular/core';
import { ReviewModel } from '../../shared/models/review';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.html',
  styleUrls: ['./review-item.scss']
})
export class ReviewItemComponent {
  @Input() review!: ReviewModel;
}
