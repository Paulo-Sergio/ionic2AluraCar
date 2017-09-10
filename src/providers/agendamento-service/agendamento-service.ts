import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Agendamento } from "../../model/agendamento.model";
import 'rxjs/add/operator/map';

/*
  Generated class for the AgendamentoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AgendamentoServiceProvider {

  constructor(private _http: Http) { }

  public agenda(agendamento: Agendamento) {

    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&preco=${agendamento.valor}&nome=${agendamento.nome}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
    return this._http
      .get(api)
      .toPromise()
  }

}
