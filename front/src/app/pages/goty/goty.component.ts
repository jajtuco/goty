import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominados()
      .subscribe(res => {
        this.juegos = res;
      });
  }

  votarJuego(juego: Game) {

    this.gameService.votarJuego(juego.id)
      .subscribe((res: {ok: boolean, mensaje: string}) => {

        if (res.ok) {
          Swal.fire({
            title: 'Gracias!',
            text: res.mensaje,
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Oops!!',
            text: res.mensaje,
            icon: 'error'
          })
        }

      });
  }

}
