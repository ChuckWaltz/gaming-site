import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storyService: StoryService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.searchStories();
      }
    });
  }

  stories: Entry<any>[] = [];

  storyLimitReached: boolean = true;

  ngOnInit(): void {}

  searchStories(): void {
    let searchString = this.route.snapshot.queryParams['search'];

    this.storyService
      .getStories({
        query: searchString,
        order: '-sys.updatedAt',
        /* limit: this.pageSize,
        skip: this.stories.length, */
      })
      .then((stories) => {
        this.stories = stories;
      });
  }
}
