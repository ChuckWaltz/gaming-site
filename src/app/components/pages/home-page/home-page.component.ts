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

  stories: Entry<any>[];

  canGetMoreStories: boolean = true;

  ngOnInit(): void {
    this.storyService
      .getStories({ order: '-sys.updatedAt' })
      .then((stories) => {
        this.stories = [...stories];
        console.log(this.stories);

        setTimeout(() => {
          this.storyGridRef.updateGrid();
        });
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
