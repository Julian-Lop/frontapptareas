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
  showSubtasks:boolean=false

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
    this.currentTask.Subtareas.map((subtask:any) => {
      let newSubtask = {
        id: subtask.id,
        Titulo: subtask.Titulo,
        Descripcion: subtask.Descripcion,
        EstadoId: this.complete ? 2 : 1
      }
      this.taskservice.editSubtask(newSubtask).subscribe()
    })
    this.taskservice.editTask(taskCompleted).subscribe(e => {alert(e.message); this.tasks.getTasks()})
  }

  dropSubtasks(){
    this.showSubtasks = this.showSubtasks ? false : true
  }
}
