import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../equipo';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-detail',
  templateUrl: './equipos-detail.component.html',
  styleUrls: ['./equipos-detail.component.css']
})
export class EquiposDetailComponent implements OnInit {

  equipo : Equipo | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private equiposService: EquiposService) {}

  ngOnInit(): void {
    window.document.body.style.backgroundColor = '#FFDAB9';
    this.activatedRoute.params.subscribe(p =>
    this.equiposService.getEquipo(p.full_name).subscribe(equipo => this.equipo = equipo));

  }



}
