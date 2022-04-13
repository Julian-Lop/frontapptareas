import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  tareas : any = []
  constructor(private tasks:TareasService) { }

  ngOnInit(): void {
    this.tasks.getTareas().subscribe(res => this.tareas.push(res))
  }



}
