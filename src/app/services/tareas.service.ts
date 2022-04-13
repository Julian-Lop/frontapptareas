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

  getTareas():Observable<any>{
    return this.http.get<any>(`${environment.url}obtenerTareas/1`)
  }

}
