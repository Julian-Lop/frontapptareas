import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  @Input() currentSubtask : any = {}

  complete:any = false
  showEditSubtask:boolean=false

  constructor(private taskservice:TareasService, private tasks:TasksComponent) { }

  ngOnInit(): void {
    this.complete=this.currentSubtask.EstadoId === 2 ? true : false
  }

  deleteSubtask(){
    this.taskservice.deleteSubtask(this.currentSubtask.id).subscribe(res => {
      alert(res.message)
      if(res.subtarea){
        this.tasks.getTasks()
      }
    })
  }

  editSubtask(){
    this.showEditSubtask = this.showEditSubtask ? false : true
  }

  completeTask(){
    let taskCompleted = {
      id:this.currentSubtask.id,
      Titulo:this.currentSubtask.Titulo,
      Descripcion:this.currentSubtask.Descripcion,
      EstadoId: this.complete ? 2 : 1,
    }
    this.taskservice.editSubtask(taskCompleted).subscribe(e => {alert(e.message); this.tasks.getTasks()})
  }
}
