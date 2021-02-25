import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipos: Equipo[] = []; /*= [
{png: "/assets/img/fotohawks.png",link: "https://www.nba.com/hawks/",full_name: "Atlanta Hawks",conference: "Este"},
{png: "/assets/img/fotoceltics.png",link: "https://www.nba.com/celtics/",full_name: "Boston Celtics",conference: "Este"},
{png: "/assets/img/fotonets.png",link: "https://www.nba.com/nets/",full_name: "Brooklyn Nets",conference: "Este"},
{png: "/assets/img/fotohornets.png",link: "https://www.nba.com/hornets/",full_name: "Charlotte Hornets",conference: "Este"}
];*/ /*= [
{png: "/assets/img/fotohawks.png",link: "https://www.nba.com/hawks/",full_name: "Atlanta Hawks",conference: "Este"},
{png: "/assets/img/fotoceltics.png",link: "https://www.nba.com/celtics/",full_name: "Boston Celtics",conference: "Este"},
{png: "/assets/img/fotonets.png",link: "https://www.nba.com/nets/",full_name: "Brooklyn Nets",conference: "Este"},
{png: "/assets/img/fotohornets.png",link: "https://www.nba.com/hornets/",full_name: "Charlotte Hornets",conference: "Este"}
  ];*/

  criterio: string | undefined;
  constructor( private equiposService : EquiposService) { }

  ngOnInit(): void {
    window.document.body.style.backgroundColor = '#FFDAB9';

    this.equiposService.getEquipos().subscribe(
      equipos => this.equipos = equipos
    )
  }

}
