import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoryGridComponent } from './components/story-grid/story-grid.component';
import { StorySubGridComponent } from './components/story-sub-grid/story-sub-grid.component';
import { StoryListComponent } from './components/story-list/story-list.component';

import { StoryService } from './services/story-service/story.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    StoryGridComponent,
    StorySubGridComponent,
    StoryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [StoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
