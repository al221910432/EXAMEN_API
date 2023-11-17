import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Personaje} from '../interfaces/Personaje' 
import {Details} from '../interfaces/Details'
import {tap, mergeMap, pluck} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  urlAllCharacters: string
    list!: Details[];

    constructor(private httpclient: HttpClient) { 
        this.urlAllCharacters="https://rickandmortyapi.com/api/character/?page=20"

    }

// entry(user: User): Observable<JwtResponse>

    getAllCharacters():Observable<Details[]>{
        return this.httpclient.get<Personaje>(this.urlAllCharacters)
            .pipe(
                pluck(('results'))
            )
    }
   
}