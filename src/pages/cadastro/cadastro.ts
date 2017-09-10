import { Component } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { Carro } from "../../model/carro.model"
import { HomePage } from "../home/home"

import 'rxjs/add/operator/toPromise'
import { Agendamento } from "../../model/agendamento.model";
import { AgendamentoServiceProvider } from "../../providers/agendamento-service/agendamento-service"

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [AgendamentoServiceProvider]
})
export class CadastroPage {

  public carro: Carro
  public precoTotal: number

  /* campos do formulario */
  public agendamento: Agendamento

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _service: AgendamentoServiceProvider,
    private _alertCtrl: AlertController
  ) {

    this.carro = this.navParams.get('carro')
    this.precoTotal = this.navParams.get('precoTotal')

    this.agendamento = new Agendamento(this.carro, this.precoTotal)
  }

  public agenda(): void {
    if (!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email) {
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons: [{ text: 'OK' }],
      }).present()

      return
    }

    this._service.agenda(this.agendamento)
      .then(() => {
        this._alertCtrl.create({
          title: 'Aviso',
          buttons: [{ text: 'OK', handler: () => this.navCtrl.setRoot(HomePage)[0] }],
          subTitle: 'Agendamento realizado com sucesso'
        }).present()
      })
      .catch((err) => {
        console.log(err)
        this._alertCtrl.create({
          title: 'Problema',
          buttons: [{ text: 'OK' }],
          subTitle: 'Não foi possivel agendar o agendamento. Tente mais tarde'
        }).present()
      })
  }

}
