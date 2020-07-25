import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-sub-grid',
  templateUrl: './story-sub-grid.component.html',
  styleUrls: ['./story-sub-grid.component.scss'],
})
export class StorySubGridComponent implements OnInit {
  constructor() {}

  @Input() stories: any[];

  ngOnInit(): void {}
}
