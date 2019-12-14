import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeModel} from '../model/pokeModel';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  contactsEndpoint = 'http://localhost:3000/ps6';

  getEvolChain(): Observable<PokeModel[]> {

    return this.httpClient.get<PokeModel[]>(this.contactsEndpoint);
  }

}
