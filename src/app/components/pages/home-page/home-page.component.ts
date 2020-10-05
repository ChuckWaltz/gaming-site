import { Component, OnInit, ViewChild } from '@angular/core';
import { StoryService } from 'src/app/services/story-service/story.service';
import { Entry } from 'contentful';
import { StoryGridComponent } from '../../story-grid/story-grid.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private storyService: StoryService) {}

  @ViewChild(StoryGridComponent) storyGridRef: StoryGridComponent;

  stories: Entry<any>[] = [];

  pageSize: number = 15;
  currentPage: number = 1;
  storyLimitReached: boolean = true;

  ngOnInit(): void {
    this.getStories(true);
  }

  getStories(initial: boolean = false): void {
    this.currentPage++;

    if (initial) this.currentPage = 1;

    this.storyService
      .getStories({
        order: '-sys.updatedAt',
        limit: this.pageSize,
        skip: this.pageSize * (this.currentPage - 1),
      })
      .then((stories) => {
        this.storyLimitReached = stories.length < this.pageSize;
        this.stories = this.stories.concat([...stories]);
        console.log(this.stories);
      });
  }

  getGridStories(): Entry<any>[] {
    return this.stories.slice(0, 8);
  }

  getSubGridStories(): Entry<any>[] {
    return this.stories.slice(8, 11);
  }

  getListStories(): Entry<any>[] {
    return this.stories.slice(11);
  }
}
