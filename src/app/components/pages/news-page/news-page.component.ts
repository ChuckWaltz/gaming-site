import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService
  ) {}

  story: Entry<any>;

  ngOnInit(): void {
    let storyId: any = this.route.snapshot.params.id;

    this.storyService.getStory(storyId).then((story) => {
      this.story = story;
      console.log(story);
    });
  }
}
