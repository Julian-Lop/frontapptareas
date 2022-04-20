import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() currentTask: any = {}

  complete:any = false
  showSubtasks:boolean=false
  percentageRealizedSubtask:number=0
  subtasks:any= []

  constructor(private taskservice:TareasService, private tasks:TasksComponent) { }

  ngOnInit(): void {
    this.percentageRealized()
    this.subtasks = this.currentTask.Subtareas.sort((a:any,b:any) => a.id-b.id)
  }


  deleteTask(){
    this.taskservice.deleteTask(this.currentTask.id).subscribe(res => {
      alert(res.message)
      this.tasks.getTasks()
    })
  }

  editTask(){
    this.tasks.showModalEdit(this.currentTask)
  }

  completeTask(){
    let taskCompleted = {
      id:this.currentTask.id,
      Titulo:this.currentTask.Titulo,
      Descripcion:this.currentTask.Descripcion,
      FechaIni:this.currentTask.FechaIni,
      FechaFin:this.currentTask.FechaFin,
      EstadoId: this.complete ? 2 : this.currentTask.EstadoId,
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

  showAddSubtarea(){
    this.tasks.showModalAddSubtarea(this.currentTask)
  }

  dropSubtasks(){
    this.showSubtasks = this.showSubtasks ? false : true
  }

  percentageRealized(){
    let percentage = 0 
    let total = 0
    this.currentTask.Subtareas.map((subtask:any) => {
      total+= subtask.EstadoId === 2 ? 1 : 0
    })
    percentage = ((total)/(this.currentTask.Subtareas.length))*100
    this.percentageRealizedSubtask = isNaN(percentage) ? 0 : Number(percentage.toFixed(0))
  }

}
