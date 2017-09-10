import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Carro } from "../../model/carro.model";
import 'rxjs/add/operator/map';

/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: Http) { }

  public carros(): Promise<Carro[]> {
    return this._http.get('https://aluracar.herokuapp.com/')
      .toPromise()
      .then((resposta: any) => { return resposta.json() })
  }

}
