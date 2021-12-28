import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>()
  userList: any
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 10,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ registros",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando ningún registro.",
        infoFiltered: "(filtrado _MAX_ registros total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      },
      responsive: true
    };
    this.getUsers()
  }

  getUsers() {
    this.userService.getList().subscribe((response: any) => {
      console.log(response.usuario)
        this.userList = response.usuario
        this.dtTrigger.next(response.usuario)
    }, (err: any) => {

    })
  }
}
