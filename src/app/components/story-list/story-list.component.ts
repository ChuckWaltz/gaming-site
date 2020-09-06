import { Component, OnInit, Input } from '@angular/core';
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

  ngOnInit(): void {}
}
