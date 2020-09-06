import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-story-sub-grid',
  templateUrl: './story-sub-grid.component.html',
  styleUrls: ['./story-sub-grid.component.scss'],
})
export class StorySubGridComponent implements OnInit {
  constructor(public storyService: StoryService) {}

  @Input() stories: any[];

  ngOnInit(): void {}
}
