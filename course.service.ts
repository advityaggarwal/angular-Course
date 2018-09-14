import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http:HttpClient) { }

  private getUrl='http://localhost:8081/rest/api/getdata/';
  private postUrl='http://localhost:8081/rest/api/postdata/';
  private deleteUrl='http://localhost:8081/rest/api/deletedata/';

  getCourses():Observable<any>
  {
    return this._http.get(this.getUrl);
  }

  postCourses(cname:string,cid:number,cduration:number,cprice:number):Observable<any>
  {
    return this._http.post(this.postUrl,{
      Name:cname,
      Id:cid,
      Duration:cduration,
      Price:cprice
    });
  }
  deleteCourse(x:string):Observable<any>
  {
    return this._http.delete(`http://localhost:8081/rest/api/deletedata/${x}`);
  }
}
