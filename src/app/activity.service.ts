import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable} from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivity(activityId:string):Observable<Activity>{
return this.httpClient.get<Activity>(API +"/" +activityId);
  }

  getActivites():Observable<Activity[]>{
return this.httpClient.get<Activity[]>(API);
  }
}
const API="http://localhost:3000/activities";
