import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  stories: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  ngOnInit(): void {}

  getGridStories(): any[] {
    return this.stories.slice(0, 8);
  }

  getListStories(): any[] {
    return this.stories.slice(8);
  }
}
