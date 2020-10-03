import { Component, OnInit } from '@angular/core';
import {
  faCaretDown,
  faUser,
  faSearch,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  faCaretDown = faCaretDown;
  faUser = faUser;
  faSearch = faSearch;
  faEnvelope = faEnvelope;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  category: string;

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.updateActiveCategory();
      }
    });
  }

  updateActiveCategory() {
    let url: string = this.router.url.substring(1);
    let slashIdx = url.indexOf('/');
    this.category = slashIdx === -1 ? url : url.substring(0, slashIdx);
  }

  routeTo(route: string): void {
    this.router.navigate([route]);
  }
}
