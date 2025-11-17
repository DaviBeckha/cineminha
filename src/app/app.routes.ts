import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home/home';
import { ListCategoriesComponent } from './views/list-categories/list-categories';
import { CategoryDetailsComponent } from './views/category-details/category-details';
import { Contents } from './services/contents';
import { CardContentComponent } from './components/card-content/card-content';
import { ListContents } from './views/contents/list-contents/list-contents';
import { ContentDetailsComponent } from './views/contents/content-details/content-details';
import { ListReviewsComponent } from './views/reviews/list-reviews/list-reviews';
import { ReviewDetailsComponent } from './views/reviews/list-details/list-details';

export const routes: Routes = [
    { path: '', component: HomePageComponent },

  { path: 'categories', component: ListCategoriesComponent },
  { path: 'categories/:id', component: CategoryDetailsComponent },

  { path: 'contents', component: ListContents },
  { path: 'contents/:id', component: ContentDetailsComponent },

  { path: 'reviews', component: ListReviewsComponent },
  { path: 'reviews/:id', component: ReviewDetailsComponent },

];
