import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { CompleteTasksComponent } from '../complete-tasks/complete-tasks.component';
import { TaskCompletedComponent } from '../task-completed/task-completed.component';

@Component({
  selector: 'app-complete-subtask',
  templateUrl: './complete-subtask.component.html',
  styleUrls: ['./complete-subtask.component.css']
})
export class CompleteSubtaskComponent implements OnInit {

  @Input() currentSubtask : any = {}

  complete:any = false
  showEditSubtask:boolean=false

  constructor(private taskservice:TareasService, private completeTasks:CompleteTasksComponent) { }

  ngOnInit(): void {
    this.complete = this.currentSubtask.EstadoId === 1 ? false : true
  }

  deleteSubtask(){
    this.taskservice.deleteSubtask(this.currentSubtask.id).subscribe(res => {
      alert(res.message)
      if(res.subtarea){
        this.completeTasks.getTasks()
      }
    })
  }

}
