import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas:any = []

  constructor(private http:HttpClient) { }

  getTareas(id:number):Observable<any>{
    return this.http.get<any>(`${environment.url}obtenerTareas/${id}`)
  }

  createTask(task:object):Observable<any>{
    let temp = this.http.post<any>(`${environment.url}crearTarea`,task)
    return temp
  }

  deleteTask(idTask:number):Observable<any>{
    return this.http.delete<any>(`${environment.url}eliminarTarea/${idTask}`)
  }

  editTask(taskedit:object):Observable<any>{
    return this.http.put(`${environment.url}editarTarea`,taskedit)
  }


  createSubtask(subtask:object):Observable<any>{
    let temp = this.http.post<any>(`${environment.url}crearSubtarea`,subtask)
    return temp
  }

  deleteSubtask(idSubtask:number):Observable<any>{
    return this.http.delete<any>(`${environment.url}eliminarSubtarea/${idSubtask}`)
  }

  editSubtask(subtask:object):Observable<any>{
    let temp = this.http.put(`${environment.url}editarSubtarea`, subtask)
    return temp
  }
  
}
