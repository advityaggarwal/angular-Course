import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'; 
import {HelloComponent} from './hello/hello.component';
import {CoursesComponent} from './courses/courses.component';
import {CoursesjsonComponent} from './coursesjson/coursesjson.component';
import { DisplayComponent } from './display/display.component';



const routes:Routes=[
  {
    path:'hello',component:HelloComponent
  },
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'coursesjson',component:CoursesjsonComponent
  },
  {
    path:'display',component:DisplayComponent
  },
  {
    path:'',redirectTo:'hello',pathMatch:'full'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
