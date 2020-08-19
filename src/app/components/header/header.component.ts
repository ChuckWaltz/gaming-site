import { Component, OnInit, Input } from '@angular/core';
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
import { Router } from '@angular/router';

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

  ngOnInit(): void {}

  routeTo(route: string): void {
    this.router.navigate([route]);
  }
}
