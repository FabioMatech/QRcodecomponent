import { Component, OnInit } from '@angular/core';
import { PaisesdacopaService } from '../paisesdacopa.service';

@Component({
  selector: 'app-paisesdacopa',
  templateUrl: './paisesdacopa.component.html',
  styleUrls: ['./paisesdacopa.component.scss']
})
export class PaisesdacopaComponent implements OnInit {

  paises: Array<any> = new Array();

  constructor(private PaisesdacopaService: PaisesdacopaService) { }

  ngOnInit() {
    this.listarPaises();

  }

  listarPaises(){
    this.PaisesdacopaService.informacoesPaises().subscribe( paises => {
      this.paises = paises;
    }, err => {
      console.log('Erro ao listar as informações dos paises', err)
    })
  }
}
