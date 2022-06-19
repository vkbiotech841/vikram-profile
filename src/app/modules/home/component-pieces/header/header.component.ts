import { TabInterface } from './../../models/tab.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedTabIndex: number = 0;
  public navbarTabs: TabInterface[] = [
    {
      name: "about",
      displayName: 'About',
      link: '/about'
    },
    {
      name: "projects",
      displayName: 'Projects',
      link: '/projects'
    },
    {
      name: "resume",
      displayName: 'Resume',
      link: '/resume'
    },
    {
      name: "blogs",
      displayName: 'Blogs',
      link: '/blogs'
    },
    {
      name: "contact",
      displayName: 'COntact',
      link: '/contact'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public selectedTab(tabIndex: number): void {
    this.selectedTabIndex = tabIndex;
  }

}
