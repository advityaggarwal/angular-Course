import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesjsonComponent } from './coursesjson/coursesjson.component';
import { HelloComponent } from './hello/hello.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { CourseService } from './course.service';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesjsonComponent,
    HelloComponent,
    DisplayComponent,
  ],
  imports: [
    
    AppRoutingModule,BrowserModule,FormsModule,HttpClientModule,RouterModule,
  ],
  providers: [HttpClientModule,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
