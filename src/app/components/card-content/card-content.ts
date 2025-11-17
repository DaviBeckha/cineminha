import { Component, Input } from '@angular/core';
import { Content } from '../../shared/models/content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.html',
  standalone: true,
  imports: [RouterModule], 
  styleUrls: ['./card-content.scss']
})
export class CardContentComponent {
  @Input() content!: Content;
}
