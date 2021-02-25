import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Division } from 'src/app/components/division.model';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {
  equipos: Equipo[] = [];
  divisions: Division[] = [
    {id: 1, name: 'NBA'},
    {id: 1, name: 'ACB'},
    {id: 1, name: 'NCAA'}
  ];
  formEquipo : FormGroup | undefined;
   formSubmitAttempt!: boolean;

    constructor(private formBuilder: FormBuilder) {
    }
    onSubmit() {
      this.formSubmitAttempt = true;

    }
    get nameValid(){
      const control = this.formEquipo?.get('name');
      if (!control?.touched) {
        return null;
      }else{
        return control?.valid
      }
    }
    get botoValid(){
      const control = this.formEquipo?.get('boto');
      if (!control?.touched) {
        return null;
      }else{
        return control?.valid
      }
    }

  ngOnInit() {
    window.document.body.style.backgroundColor = '#FFDAB9';
    this.formEquipo = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(5)]],
      desc: [''],
      divisio: [this.divisions,Validators.required],
      boto: [Validators.required]
      });
  }
  crear(){
    console.log(this.formEquipo);
  }


}
