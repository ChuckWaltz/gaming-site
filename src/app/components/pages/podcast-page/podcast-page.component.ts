import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

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
          'fields.category': 'Podcasts',
          limit: 5,
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

  podcastAudio: HTMLVideoElement;
  podcastPlaying: boolean = false;

  faPlay = faPlay;
  faPause = faPause;

  ngOnInit(): void {
    let initInterval = setInterval(() => {
      if (this.podcastAudio) clearInterval(initInterval);
      this.podcastAudio = <HTMLVideoElement>(
        document.getElementById('podcast-audio')
      );
    }, 100);
  }

  togglePodcast() {
    if (this.podcastAudio && this.podcastPlaying) {
      this.podcastAudio.pause();
      this.podcastPlaying = false;
    } else {
      this.podcastAudio.play();
      this.podcastPlaying = true;
    }
  }
}
