import { Component, OnInit } from '@angular/core';
import { Contents } from '../../../services/contents';
import { CardContentComponent } from '../../../components/card-content/card-content';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './list-contents.html',
  imports: [CardContentComponent, CommonModule]
})
export class ListContents implements OnInit {
  contents: any[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(c => this.contents = c);
  }

  constructor(private service: Contents) {}
}
