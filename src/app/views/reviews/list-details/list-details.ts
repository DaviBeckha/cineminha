import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Reviews } from '../../../services/reviews';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-review-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-details.html',
  styleUrls: ['./list-details.scss']
})
export class ReviewDetailsComponent implements OnInit {
  review: any;

  constructor(
    private route: ActivatedRoute,
    private service: Reviews
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getById(id).subscribe(r => this.review = r);
  }
}
