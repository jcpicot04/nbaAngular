import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { Equipos } from '../equipos';

@Component({
  selector: 'app-equipos-item',
  templateUrl: './equipos-item.component.html',
  styleUrls: ['./equipos-item.component.css']
})
export class EquiposItemComponent implements OnInit {

  @Input() equipo : Equipo | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
