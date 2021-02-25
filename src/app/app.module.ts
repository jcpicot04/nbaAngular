import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EquiposListComponent } from './equipos/equipos-list/equipos-list.component';
import { EquiposItemComponent } from './equipos/equipos-item/equipos-item.component';
import { HomeComponent } from './components/home/home.component';
import { EquiposService } from './equipos/equipos.service';
import { HttpClientModule } from '@angular/common/http';
import { EquiposDetailComponent } from './equipos/equipos-detail/equipos-detail.component';
import { PresupuestoPipe } from './equipos/presupuesto.pipe';
import { FiltroPipe } from './equipos/filtro.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DirectivaDirective } from './directives/directiva.directive';
import { TorneoComponent } from './equipos/torneo/torneo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquiposListComponent,
    EquiposItemComponent,
    HomeComponent,
    EquiposDetailComponent,
    PresupuestoPipe,
    FiltroPipe,
    LoginComponent,
    DirectivaDirective,
    TorneoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
