import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-add-subtarea',
  templateUrl: './add-subtarea.component.html',
  styleUrls: ['./add-subtarea.component.css']
})
export class AddSubtareaComponent implements OnInit {

  Titulo:string=''
  Descripcion:string=''

  constructor(private tasks:TasksComponent, private taskservice:TareasService) { }

  @Input() currentTask : any = {}

  ngOnInit(): void {
  }

  onSubmit(){
    let createdSubtask = {
      Titulo:this.Titulo,
      Descripcion:this.Descripcion,
      TareaId: this.currentTask.id
    }
    if(this.Titulo && this.Descripcion){
      this.taskservice.createSubtask(createdSubtask).subscribe(res => {
        alert(res.message);
        if(res.subtarea){
          this.tasks.getTasks()
          this.exitModal()
        }
      })
    }
  }

  exitModal(){
    this.tasks.showModalAddSubtarea(this.currentTask)
  }
}
