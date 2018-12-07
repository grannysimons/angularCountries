import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  countries$: Observable<Country[]>;
  private searchTerms = new Subject<string>();
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries$ = this.searchTerms
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountries(term)),
    );
  }

  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }
}
