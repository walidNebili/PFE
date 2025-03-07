import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  SERVER = 'http://localhost/PFE/api/module/';

  
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.SERVER + 'getAll');
  }
  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SERVER + 'getById/?id=' + id);
  }

  getModuleBySpecialite(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SERVER + 'getModuleBySpecialite/?id=' + id);
  }
  create(etudiant) {
    
    return this.httpClient.post(this.SERVER + 'create', etudiant,{responseType: 'text'});
  }
  delete(id) {
    return this.httpClient.delete(this.SERVER + 'delete/?id='+id );
  }
  edit(etudiant){
    console.log(etudiant);

    return this.httpClient.put(this.SERVER+"update/", etudiant)
  }
}
