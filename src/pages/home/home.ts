import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Array<Object>

  constructor(public navCtrl: NavController, private _http: Http) {

    this._http.get('https://aluracar.herokuapp.com/')
      .map(response => { return response.json() })
      .toPromise()
      .then(carros => { this.carros = carros })

  }

}
