import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

export class Company {
  title: string;
  text: string;
  url: string;
  image: string;
  site: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private dataSubject = new BehaviorSubject<Company[]>([]);
  private dataStore: { companies: Company[] } = {companies: []};

  constructor(private http: HttpClient) {
  }

  get companies() {
    return this.dataSubject.asObservable();
  }

  addOne() {
    this.dataStore.companies.push({
      title: 'Joepie',
      text: 'This is awesome',
      url: 'http://www.google.nl',
      image: 'dummy.jpg',
      site: 'hamana'
    });
    this.dataSubject.next(Object.assign({}, this.dataStore).companies);
  }

  load() {
    this.http.get(`${environment.apiUrl}/portfolio`).subscribe((data: Company[]) => {
        this.dataStore.companies = data;
        this.dataSubject.next(Object.assign({}, this.dataStore).companies);
      },
      error => {
        return {error: 'could not load portfolio'};
      });
  }
}
