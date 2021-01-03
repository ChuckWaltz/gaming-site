import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
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

  searchBarActive: boolean = false;
  searchValue: string;

  @ViewChild('toggleSearchButton') toggleSearchButtonRef: ElementRef;
  @ViewChild('searchBar') searchBarRef: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    setTimeout(() => {
      if (
        !this.toggleSearchButtonRef.nativeElement.contains(event.target) &&
        !this.searchBarRef.nativeElement.contains(event.target) &&
        this.searchBarActive
      ) {
        this.toggleSearchBar();
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.updateActiveCategory();
        if (this.category === 'search') {
          this.searchBarActive = true;
        } else {
          this.searchBarActive = false;
          this.searchValue = '';
        }
      }
    });
  }

  updateActiveCategory() {
    let url: string = this.router.url.substring(1);
    let slashIdx = url.indexOf('/');
    this.category = slashIdx === -1 ? url : url.substring(0, slashIdx);
    if (this.category.includes('?'))
      this.category = this.category.substring(0, this.category.indexOf('?'));
  }

  toggleSearchBar() {
    document.getElementById('search-input').focus();
    if (this.category === 'search') return;
    this.searchBarActive = !this.searchBarActive;
  }

  runSearch() {
    this.router.navigate(['/search'], {
      queryParams: { search: this.searchValue },
    });
  }

  routeTo(route: string): void {
    this.router.navigate([route]);
  }
}
