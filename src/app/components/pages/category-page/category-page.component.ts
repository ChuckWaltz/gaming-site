import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    public storyService: StoryService,
    private route: ActivatedRoute
  ) {}

  category: string;

  stories: Entry<any>[] = [];

  pageSize: number = 15;
  currentPage: number = 1;

  ngOnInit(): void {
    this.getStories(true);
  }

  getStories(initial: boolean = false): void {
    let routeData: any = this.route.snapshot.data;
    this.category =
      routeData.category.charAt(0).toUpperCase() + routeData.category.slice(1);

    this.currentPage++;

    if (initial) this.currentPage = 1;

    this.storyService
      .getStories({
        'fields.category': this.category,
        order: '-sys.updatedAt',
        limit: this.pageSize,
        skip: this.pageSize * (this.currentPage - 1),
      })
      .then((stories) => {
        this.stories = this.stories.concat([...stories]);
        console.log(this.stories);
      });
  }

  getListStories(): Entry<any>[] {
    return this.stories.slice(2);
  }
}
