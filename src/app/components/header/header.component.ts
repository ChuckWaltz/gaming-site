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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  faCaretDown = faCaretDown;
  faUser = faUser;
  faSearch = faSearch;
  faEnvelope = faEnvelope;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  ngOnInit(): void {}
}
