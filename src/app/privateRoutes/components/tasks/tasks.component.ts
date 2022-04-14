import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:any = []
  modal:boolean=false
  modaledit:boolean=false
  dataEditTask:object={}

  constructor(private taskservice:TareasService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    let user = this.auth.getDataUser()
    this.taskservice.getTareas(user.id).subscribe(res => this.tasks = res.tareas)
  }

  showModalAddTask(){
    this.getTasks()
    this.modal = this.modal ? false : true
  }

  showModalEdit(datatask:any){
    this.dataEditTask = datatask
    this.getTasks()
    this.modaledit = this.modaledit ? false : true
  }

}
