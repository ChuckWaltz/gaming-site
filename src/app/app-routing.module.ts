import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';

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
    path: 'reviews',
    component: CategoryPageComponent,
    data: { category: 'reviews' },
  },
  {
    path: 'podcasts',
    component: CategoryPageComponent,
    data: { category: 'podcasts' },
  },
  {
    path: 'features',
    component: CategoryPageComponent,
    data: { category: 'features' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
