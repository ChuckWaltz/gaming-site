import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  constructor() {}

  @Input() category: string = 'Stories';

  @Input() stories: any[];

  ngOnInit(): void {}
}
