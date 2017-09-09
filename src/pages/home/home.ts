import { Component, OnInit } from '@angular/core'
import { NavController, LoadingController, AlertController } from 'ionic-angular'
import { Http } from '@angular/http'
import { Carro } from "../../model/Carro"
import { EscolhaPage } from '../escolha/escolha'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros: Array<Carro>

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) { }

  ngOnInit() {
    let loader = this._loadCtrl.create({
      content: 'Buscando novos carros. Aguarde...'
    })

    loader.present();

    this._http.get('https://aluracar.herokuapp.com/')
      .map(response => { return response.json() })
      .toPromise()
      .then(carros => {
        loader.dismiss();
        this.carros = carros
      })
      .catch(err => {
        console.log(err)
        loader.dismiss()
        this._alertCtrl.create({
          title: 'Falha na conexão',
          buttons: [{ text: 'Estou ciente!' }],
          subTitle: 'Não foi possivel a lista de carros. Tenta mais tarde.'
        }).present()
      })
  }

  public seleciona(carro: Carro) {
    this.navCtrl.push(EscolhaPage, {
      carroSelecionado: carro
    })
  }

}
