import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/services/story-service/story.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
  storyBodyContent: any;

  ngOnInit(): void {
    let storyId: any = this.route.snapshot.params.id;

    this.storyService.getStory(storyId).then((story) => {
      this.story = story;
      this.storyBodyContent = documentToHtmlString(story.fields.body);
      console.log(story);
      console.log(this.storyBodyContent);
    });
  }
}
