import { AboutComponent } from './component-pieces/about/about.component';
import { BlogsComponent } from './component-pieces/blogs/blogs.component';
import { ContactComponent } from './component-pieces/contact/contact.component';
import { ResumeComponent } from './component-pieces/resume/resume.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './component-pieces/projects/projects.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {
        path: "about", component: AboutComponent
      },
      {
        path: "projects", component: ProjectsComponent
      },
      {
        path: "resume", component: ResumeComponent
      },
      {
        path: "blogs", component: BlogsComponent
      },
      {
        path: "contact", component: ContactComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
