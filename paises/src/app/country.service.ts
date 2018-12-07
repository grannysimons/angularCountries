import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from './country';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countriesUrl}/all?fields=name;alpha3Code`)
    .pipe(
      catchError(this.handleError('getCountries', []))
    );
  }
  getCountry(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.countriesUrl}/alpha/${code}`)
    .pipe(
      // catchError(this.handleError('getCountry'))
    );
  }
  searchCountries(term: string): Observable<Country[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(`${this.countriesUrl}/name/${term}`)
    .pipe(
      catchError(this.handleError<Country[]>('searchCountries'))
    );
  }
}
