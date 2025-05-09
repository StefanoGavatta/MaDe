import { Injectable } from '@angular/core';
import { SchoolsData } from '../interfaces/schools-data';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Scuola } from '../interfaces/scuola';
import { ScuolaDettagliata } from '../interfaces/scuola-dettagliata';
import { EventsData } from '../interfaces/events-data';

@Injectable({
  providedIn: 'root'
})
export class DirectusService {


private readonly apiUrl = "https://api.retescuolevallagarina.it";


 getSchoolsData(): Observable<SchoolsData | null> {
  return this.http.get<SchoolsData>(`${this.apiUrl}/items/schools`);
}

getSchoolData(id: string): Observable<Scuola | null> {
  return this.http.get<Scuola>(`${this.apiUrl}/items/schools/${id}`);
 }

 getMoreSchoolData(): Observable<ScuolaDettagliata | null> {
  return this.http.get<ScuolaDettagliata>(`${this.apiUrl}/items/schools?fields=%2A,%2A.%2A`);
 }

 getEventsData(): Observable<EventsData | null> {
  return this.http.get<EventsData>(`${this.apiUrl}/items/events`);
 }
  constructor(private http: HttpClient) { }

}


