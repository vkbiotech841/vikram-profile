import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedTabIndex: any = 0;
  public navbarTabs: string[] = [
    "about",
    "projects",
    "resume",
    "blogs",
    "contact"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public selectedTab(tabIndex: any): void {
    this.selectedTabIndex = this.selectedTab;
  }

}
