import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privateroutes',
  templateUrl: './privateroutes.component.html',
  styleUrls: ['./privateroutes.component.css']
})
export class PrivateroutesComponent implements OnInit {

  currentLink:string = ''

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  clickLink(link:string){
    this.currentLink = link
    console.log(this.currentLink)
  }

}
