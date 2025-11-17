import { Component, EventEmitter, Output } from '@angular/core';
import { ReviewModel } from '../../shared/models/review';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.html',
  standalone: true,
  imports: [FormsModule], 
  styleUrls: ['./review-form.scss']
})
export class ReviewFormComponent {
  @Output() submitReview = new EventEmitter<ReviewModel>();

  model: ReviewModel = {
    id: "",
    contentId: "",
    authorName: "",
    authorAvatar: "",
    rating: 5,
    title: "",
    comment: ""
  };

  submit() {
    this.model.id = crypto.randomUUID();
    this.submitReview.emit(this.model);
  }
}
