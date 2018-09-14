import { Component, OnInit } from '@angular/core';
import {ICourse} from './course';
import {CourseService} from '../course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:ICourse[]=[];
  courses1:any=[];
  name:string;
  id:number;
  duration:number;
  price:number;
  searchname:string;
  validate:boolean=false;
  public searchedDuration:number;
  constructor(private _courseservice:CourseService,private _router:Router) { }

  ngOnInit() {
    this._courseservice.getCourses().subscribe(data=>this.courses=data);
  }
  getDuration()
  {
    //console.log(this.searchname);
    this.searchname.toLowerCase();
    console.log(this.searchname);
    //this.courses1=this.courses.map(function(x){ return x.Name.toLowerCase() })
    let index=this.courses.findIndex(data=>data.Name.toLowerCase()===this.searchname);
    console.log(index);
    if(index>=0)
    {
      this.searchedDuration=this.courses[index].Duration;
      this.searchname=this.courses[index].Name;
    this._router.navigate(['display'],{queryParams:{Name:this.searchname, Duration: this.searchedDuration,bool: 1}})
    }
    else{
      alert('No such Course exists!');
    }
    
    //alert(searchedDuration);
  }

  getCourseDetails(x)
  {
    let index=this.courses.findIndex(y=>y===x);
    let reqName=this.courses[index].Name;
    let reqId=this.courses[index].Id;
    let reqDuration=this.courses[index].Duration;
    let reqPrice=this.courses[index].Price;
    alert('Name='+reqName+' Id='+reqId+' Duration='+reqDuration+'hrs Price='+reqPrice);
  }

  onAddCourse()
  {
    this.validate=true;
    if(this.name&&this.id&&this.duration&&this.price&&this.validate)
    {
      let addedData={"Name":this.name,"Id":this.id,"Duration":this.duration,"Price":this.price};
      console.log(addedData);
      let index=this.courses.findIndex(data=>data.Name===addedData.Name && data.Id===addedData.Id && data.Duration===addedData.Duration && data.Price===addedData.Price);
      console.log(index);
      if(index<0)
      {
        this.courses.push({"Name":this.name,"Id":this.id,"Duration":this.duration,"Price":this.price});
      }
      else
      {
        alert('Course already exists!');
      }
    this._courseservice.postCourses(this.name,this.id,this.duration,this.price).subscribe();
    this.name=null;
    this.id=null;
    this.duration=null;
    this.price=null;
    this.validate=false;
    }
  }

  deleteMe(x)
  {
    console.log(x);
    let index=this.courses.findIndex(y=>y.Name===x.Name);
    this.courses.splice(index,1);
    console.log(this.courses);
    this._courseservice.deleteCourse(x.Name).subscribe(res => console.log(res));
  }
}
