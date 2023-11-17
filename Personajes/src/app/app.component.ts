import { Component, OnInit } from '@angular/core';
import { PersonajesService} from '../app/services/personajes.service';
import {tap, filter, mergeMap} from 'rxjs/operators'
import {Personaje} from '../app/interfaces/Personaje'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: Observable<any> | undefined;

  constructor(private requestsService: PersonajesService) { }

  ngOnInit() {
    this.result= this.requestsService.getAllCharacters()

  }

 
  
}





