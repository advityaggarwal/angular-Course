import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ICourse } from '../courses/course';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    courses:ICourse[]=[];
    "Name":string;
    "Id":number;
    "Duration":number;
    "Price":number;
    "bool":number=0;
  constructor(private route:ActivatedRoute,private _service:CourseService) { }

  ngOnInit() {
    //this._service.getCourses().subscribe(data=>this.courses=data)
    this.route.queryParams.subscribe(queryParams=>{
      this.Name=queryParams.Name;
      this.Id=queryParams.Id;
      this.Duration=queryParams.Duration;
      this.Price=queryParams.Price;
      this.bool=queryParams.bool;
    

    })
  }

}
