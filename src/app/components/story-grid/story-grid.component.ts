import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ScreenSize } from '../../enums/screen-size.enum';
import { getScreenSize } from '../../utils/common-utils';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.scss'],
})
export class StoryGridComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _doc: Document,
    public storyService: StoryService
  ) {}

  @Input() stories: any[];

  screenSize: ScreenSize;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateGrid();

    window.onresize = () => {
      this.updateGrid();
    };
  }

  updateGrid(): void {
    this.screenSize = getScreenSize();

    let sgiElements = this._doc.getElementsByClassName('sgi');

    // Loop through all grid items
    for (var i = 0; i < sgiElements.length; i++) {
      let el = sgiElements[i];

      el.classList.remove('sgi-large', 'sgi-medium', 'sgi-mt');

      switch (i + 1) {
        case 1:
          el.classList.add('sgi-large', 'sgi-corner');
          break;
        case 2:
          if (this.screenSize === ScreenSize.XL) el.classList.add('sgi-mt');
          break;
        case 4:
          if (this.screenSize !== ScreenSize.Large)
            el.classList.add('sgi-medium');
          break;
        case 6:
          if (this.screenSize === ScreenSize.XL) el.classList.add('sgi-medium');
          break;
        case 5:
          if (this.screenSize === ScreenSize.Large)
            el.classList.add('sgi-medium');
          break;
        default:
          break;
      }
    }
  }
}
