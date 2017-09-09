import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from "../../model/Carro";

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro
  public precoTotal: number

  /* campos do formulario */
  public nome: string
  public endereco: string
  public email: string
  public data: string = new Date().toISOString()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

    this.carro = this.navParams.get('carro')
    this.precoTotal = this.navParams.get('precoTotal')

  }

  public agenda(): void {
    console.log(this.nome)
    console.log(this.endereco)
    console.log(this.email)
    console.log(this.data)
  }



}
