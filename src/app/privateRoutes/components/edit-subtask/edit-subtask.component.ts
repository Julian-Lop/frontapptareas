import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { SubtaskComponent } from '../subtask/subtask.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-edit-subtask',
  templateUrl: './edit-subtask.component.html',
  styleUrls: ['./edit-subtask.component.css']
})
export class EditSubtaskComponent implements OnInit {

  @Input() currentSubtask:any={}

  Titulo:string= ''
  Descripcion:string= ''

  constructor(private subtask:SubtaskComponent, private taskservice:TareasService, private tasks:TasksComponent) { }

  ngOnInit(): void {
    this.Titulo = this.currentSubtask.Titulo
    this.Descripcion = this.currentSubtask.Descripcion
  }

  onSubmit(){
    let newSubtask = {
      Titulo:this.Titulo,
      Descripcion:this.Descripcion,
      id:this.currentSubtask.id
    }
    this.taskservice.editSubtask(newSubtask).subscribe(res => {
      alert(res.message)
      this.tasks.getTasks()
      this.exitEdit()
    })
  }

  exitEdit(){
    this.subtask.editSubtask()
  }

}
