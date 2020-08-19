import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'news',
    component: CategoryPageComponent,
    data: { category: 'news' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
