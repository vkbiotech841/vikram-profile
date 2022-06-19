import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component-pieces/header/header.component';
import { ProjectsComponent } from './component-pieces/projects/projects.component';
import { ResumeComponent } from './component-pieces/resume/resume.component';
import { BlogsComponent } from './component-pieces/blogs/blogs.component';
import { ContactComponent } from './component-pieces/contact/contact.component';
import { AboutComponent } from './component-pieces/about/about.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    BlogsComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
