import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GtmIdService {

  constructor(private _http:Http) {}

  getGtmIdByCountryCode(countryCode) {
    return this._http.get('../assets/country.gtm.json')
                .map((data) => {
                    let gtmIds = data.json();
                    return (gtmIds.hasOwnProperty(countryCode.toUpperCase()))
                              ? gtmIds[countryCode.toUpperCase()]
                              : null;
                  }); 
 }
}
