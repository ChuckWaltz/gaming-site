import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  constructor(public storyService: StoryService) {}

  @Input() category: string = 'Stories';

  @Input() stories: any[];

  @Input() storyLimitReached: boolean = false;

  @Output() getStories: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  handleShowMore(): void {
    this.getStories.emit();
  }
}
