import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoryGridComponent } from './components/story-grid/story-grid.component';
import { StorySubGridComponent } from './components/story-sub-grid/story-sub-grid.component';
import { StoryListComponent } from './components/story-list/story-list.component';

import { StoryService } from './services/story-service/story.service';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { NewsPageComponent } from './components/pages/news-page/news-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { ReviewPageComponent } from './components/pages/review-page/review-page.component';
import { FeaturePageComponent } from './components/pages/feature-page/feature-page.component';
import { PodcastPageComponent } from './components/pages/podcast-page/podcast-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    StoryGridComponent,
    StorySubGridComponent,
    StoryListComponent,
    FooterComponent,
    CategoryPageComponent,
    NewsPageComponent,
    VideoPageComponent,
    ReviewPageComponent,
    FeaturePageComponent,
    PodcastPageComponent,
    SearchPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [StoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
