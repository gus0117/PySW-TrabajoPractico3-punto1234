import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  listaAsistentes: Array<Asistente>;
  constructor() { 
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia = false;
    this.listaAsistentes = new Array<Asistente>();
    this.testLista();
  }

  ngOnInit(): void {
  }

  public limpiarAsistente(){
    console.log(this.asistente.solicitaConstancia);
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia = false;
  }

  public agregarNuevoAsistente(){
    this.listaAsistentes.push(this.asistente);
    this.limpiarAsistente();
  }

  private testLista(){
    this.listaAsistentes.push(new Asistente("corre@mail.com", "organizacion 1", true));
    this.listaAsistentes.push(new Asistente("gustavo@mail.com", "organizacion 2", false));
  }
}
