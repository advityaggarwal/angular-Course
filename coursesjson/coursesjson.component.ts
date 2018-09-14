import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
import { ICourse } from '../courses/course';

@Component({
  selector: 'app-coursesjson',
  templateUrl: './coursesjson.component.html',
  styleUrls: ['./coursesjson.component.css']
})
export class CoursesjsonComponent implements OnInit {
  courses:ICourse[]=[];
  constructor(private courseservice:CourseService) { }

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data=>this.courses=data);
  }

}
