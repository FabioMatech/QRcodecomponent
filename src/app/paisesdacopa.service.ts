import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesdacopaService {

  constructor(private http: HttpClient) { }

  informacoesPaises(): Observable<any>{
    return this.http.get("http://localhost:3000/paises")
  }
}
