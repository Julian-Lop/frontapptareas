import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TareasService } from 'src/app/services/tareas.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() task:any = {}

  Titulo:string=''
  Descripcion:any=''
  FechaIni:string=''
  FechaFin:string=''

  constructor(private auth:AuthService, private tasks:TasksComponent, private taskservice:TareasService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let createdTask = {
      Titulo:this.Titulo,
      Descripcion:this.Descripcion,
      FechaIni:this.FechaIni,
      FechaFin:this.FechaFin,
      IdUsuario: this.auth.getDataUser().id
    }
    if(this.Titulo && this.Descripcion){
      this.taskservice.createTask(createdTask).subscribe(res => {alert(res.message);this.exitModal()})
      this.Titulo = ''
      this.Descripcion = ''
      this.FechaIni = ''
      this.FechaFin = ''
    }
  }
  
  exitModal(){
    this.tasks.showModalAddTask()
  }

}
