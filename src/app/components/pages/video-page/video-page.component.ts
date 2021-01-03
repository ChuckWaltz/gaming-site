import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public storyService: StoryService,
    public sanitizer: DomSanitizer
  ) {
    route.params.subscribe((val) => {
      this.story = null;
      this.nextUpStories = null;

      window.scrollTo(0, 0);

      let storyId: any = this.route.snapshot.params.id;

      this.storyService.getStory(storyId).then((story) => {
        this.story = story;
        /* console.log(story); */
      });

      this.storyService
        .getStories({
          'fields.category': 'Videos',
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
