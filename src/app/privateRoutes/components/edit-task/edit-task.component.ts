import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TareasService } from 'src/app/services/tareas.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Input() task:any= {}

  Titulo:string=this.task.Titulo
  Descripcion:any=this.task.Descripcion
  FechaIni:string=this.task.FechaIni
  FechaFin:string=this.task.FechaFin
  EstadoId:number=this.task.EstadoId
  id:number=this.task.id

  constructor(private taskservice:TareasService, private auth:AuthService, private tasks:TasksComponent) { }

  ngOnInit(): void {
    this.getEditData()
  }

  getEditData(){
    this.Titulo=this.task.Titulo
    this.Descripcion=this.task.Descripcion
    this.FechaIni=this.task.FechaIni
    this.FechaFin=this.task.FechaFin
    this.EstadoId=this.task.EstadoId
    this.id=this.task.id
  }

  onSubmit(){
    let editedTask = {
      Titulo:this.Titulo,
      Descripcion:this.Descripcion,
      FechaIni:this.FechaIni,
      FechaFin:this.FechaFin,
      EstdoId:this.EstadoId,
      id:this.id
    }
    if(this.Titulo && this.Descripcion && this.id){
      this.taskservice.editTask(editedTask).subscribe(res => {alert(res.message);this.exitModal()})
    }
  }


  exitModal(){
    this.tasks.showModalEdit(this.task)
  }
  
}
