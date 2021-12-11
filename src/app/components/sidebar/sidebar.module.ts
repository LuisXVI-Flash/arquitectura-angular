import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "./sidebar.component";
import { ClientsComponent } from './clientes/clients.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { SolicitGeneralComponent } from './solicit-general/solicit-general.component';
import { SolicitAtendidComponent } from './solicit-atendid/solicit-atendid.component';
import { SolicitNoAtendidComponent } from './solicit-no-atendid/solicit-no-atendid.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from "@angular/common";
const routes: Routes = [
    { path: '', component: SidebarComponent, children: [
        { path: '', component: DashboardComponent },
        { path: 'clientes', component: ClientsComponent},
        { path: 'dispositivos', component: DispositivosComponent},
        { path: 'lista-general', component: SolicitGeneralComponent},
        { path: 'lista-atendidos', component: SolicitAtendidComponent},
        { path: 'lista-no-atendidos', component: SolicitNoAtendidComponent},
        { path: 'usuarios', component: UsuariosComponent},
    ]}
]

@NgModule({
    declarations: [
        SidebarComponent,
        ClientsComponent,
        DispositivosComponent,
        SolicitGeneralComponent,
        SolicitAtendidComponent,
        SolicitNoAtendidComponent,
        UsuariosComponent,
        DashboardComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
    
      ]
    })
export class SidebarModule {}