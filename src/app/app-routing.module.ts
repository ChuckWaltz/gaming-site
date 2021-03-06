import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { ReviewPageComponent } from './components/pages/review-page/review-page.component';
import { FeaturePageComponent } from './components/pages/feature-page/feature-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { PodcastPageComponent } from './components/pages/podcast-page/podcast-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'news',
    component: CategoryPageComponent,
    data: { category: 'news' },
  },
  {
    path: 'news/:id',
    component: NewsPageComponent,
  },
  {
    path: 'news/:id/:title',
    component: NewsPageComponent,
  },
  {
    path: 'videos/:id',
    component: VideoPageComponent,
  },
  {
    path: 'videos/:id/:title',
    component: VideoPageComponent,
  },
  {
    path: 'videos',
    component: CategoryPageComponent,
    data: { category: 'videos' },
  },
  {
    path: 'reviews/:id',
    component: ReviewPageComponent,
  },
  {
    path: 'reviews/:id/:title',
    component: ReviewPageComponent,
  },
  {
    path: 'reviews',
    component: CategoryPageComponent,
    data: { category: 'reviews' },
  },
  {
    path: 'podcasts/:id',
    component: PodcastPageComponent,
  },
  {
    path: 'podcasts/:id/:title',
    component: PodcastPageComponent,
  },
  {
    path: 'podcasts',
    component: CategoryPageComponent,
    data: { category: 'podcasts' },
  },
  {
    path: 'features/:id',
    component: FeaturePageComponent,
  },
  {
    path: 'features/:id/:title',
    component: FeaturePageComponent,
  },
  {
    path: 'features',
    component: CategoryPageComponent,
    data: { category: 'features' },
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
