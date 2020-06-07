import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('goty').valueChanges()
      .pipe(
        //Desestructuracion de objetos
        map((resp: Game[]) => resp.map(({ name, votos }) => ({ name: name, value: votos })))
      )
      .subscribe(resp => {

        this.juegos = resp;
        console.log(this.juegos);


      });

  }

}
