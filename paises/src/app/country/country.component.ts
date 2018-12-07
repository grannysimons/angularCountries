import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: Country;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  getCountry(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code)
    .subscribe(country => {
      this.country = country;
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCountry();
  }
}
