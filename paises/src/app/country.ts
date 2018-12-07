export class Country {
  alpha3Code: string;
  name: string;
  capital: string;
  subregion: string;
  region: string;
  population: number;
  currencies: [{
    name: string,
  }];
  languages: string[];
  timezones: string[];
  flag: string[];
}
