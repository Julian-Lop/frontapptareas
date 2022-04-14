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

  constructor(private taskservice:TareasService, private tasks:TasksComponent) { }

  ngOnInit(): void {
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
    console.log('completa')
  }

}
