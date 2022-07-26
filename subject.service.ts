import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  // baseApiUrl = 'https://file.io';
  subjectFile = "../assets/subject.json";

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.subjectFile);
  }

  // // Returns an observable
  // upload(file): Observable<any> {
  //   // Create form data
  //   const formData = new FormData();

  //   // Store form name as "file" with file data
  //   formData.append('file', file, file.name);

  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.baseApiUrl, formData);
  // }
}
