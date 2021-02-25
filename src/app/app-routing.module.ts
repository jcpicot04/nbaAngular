import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EquiposDetailComponent } from './equipos/equipos-detail/equipos-detail.component';
import { EquiposListComponent } from './equipos/equipos-list/equipos-list.component';
import { TorneoComponent } from './equipos/torneo/torneo.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'torneo', component: TorneoComponent},

  {path: 'equipos',
  canActivate: [AuthGuard],
  component: EquiposListComponent},
  {path: 'equipo/:full_name', component: EquiposDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
