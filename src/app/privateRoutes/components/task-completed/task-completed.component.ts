import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { CompleteTasksComponent } from '../complete-tasks/complete-tasks.component';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrls: ['./task-completed.component.css']
})
export class TaskCompletedComponent implements OnInit {

  @Input() currentTask: any = {}

  complete:any = true

  constructor(private taskservice:TareasService, private tasks:CompleteTasksComponent) { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.taskservice.deleteTask(this.currentTask.id).subscribe(res => {
      alert(res.message)
      this.tasks.getTasks()
    })
  }

  completeTask(){
    let taskCompleted = {
      id:this.currentTask.id,
      Titulo:this.currentTask.Titulo,
      Descripcion:this.currentTask.Descripcion,
      FechaIni:this.currentTask.FechaIni,
      FechaFin:this.currentTask.FechaFin,
      EstadoId: !this.complete ? 1 : this.currentTask.EstadoId,
    }
    this.taskservice.editTask(taskCompleted).subscribe(e => {alert(e.message); this.tasks.getTasks()})
  }
}
