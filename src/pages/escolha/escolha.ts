import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from "../../model/carro.model";
import { Acessorio } from "../../model/acessorio.model";
import { CadastroPage } from "../cadastro/cadastro";

@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  public carro: Carro
  public acessorios: Array<Acessorio>
  private _precoTotal: number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

    this.carro = this.navParams.get('carroSelecionado')
    this._precoTotal = this.carro.preco
    this.acessorios = [
      new Acessorio('Freio ABS', 800),
      new Acessorio('Ar-condicionado', 1000),
      new Acessorio('MP3 Player', 500)
    ]

  }

  get precoTotal(): number {
    return this._precoTotal
  }

  public atualizaTotal(ligado: boolean, acessorio: Acessorio): void {
    if (ligado) {
      this._precoTotal += acessorio.preco
    } else {
      this._precoTotal -= acessorio.preco
    }
  }

  public avancaNoAgendamento(): void {
    this.navCtrl.push(CadastroPage, {
      carro: this.carro,
      precoTotal: this._precoTotal
    })
  }

}
