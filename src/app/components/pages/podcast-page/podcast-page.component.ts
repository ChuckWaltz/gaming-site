import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-podcast-page',
  templateUrl: './podcast-page.component.html',
  styleUrls: ['./podcast-page.component.scss'],
})
export class PodcastPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public storyService: StoryService,
    public sanitizer: DomSanitizer
  ) {
    route.params.subscribe((val) => {
      window.scrollTo(0, 0);

      let storyId: any = this.route.snapshot.params.id;

      this.storyService.getStory(storyId).then((story) => {
        this.story = story;
        console.log(story);
      });

      this.storyService
        .getStories({
          'fields.category': 'Podcasts',
          order: '-sys.updatedAt',
        })
        .then((stories) => {
          this.nextUpStories = stories.filter((s) => {
            return s.sys.id !== storyId;
          });
        });
    });
  }

  story: Entry<any>;

  nextUpStories: Entry<any>[];

  ngOnInit(): void {}
}
