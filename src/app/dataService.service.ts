import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DEV_FEST_GET_SESSION_URL = "https://devfest-nantes-2018-api.cleverapps.io/sessions";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getSessions() {
    return this.httpClient.get(DEV_FEST_GET_SESSION_URL);
  }
}
