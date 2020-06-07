import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Voto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {

  @Input() results: any[] = [];


  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 35
  //   }
  // ];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';
  intervalo;


  constructor() {

    // this.intervalo = setInterval( ()=> {
    //   const newReults = [...this.results];
    //   console.log('tick');

    //   for( let i in newReults ){
    //     newReults[i].value = Math.round( Math.random() * 500);
    //   }

    //   this.results = [...newReults];
    // }, 1500);

  }

  ngOnInit() { 
    console.log(this.results);
    
  }

  ngOnDestroy() {
    // clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }

}
