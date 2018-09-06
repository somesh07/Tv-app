import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'https://anapioficeandfire.com/';
  bookurl = `${this.url}api/books/`;
  charcterUrl = `${this.url}api/characters/`;
  houseUrl = `${this.url}api/houses/`;

  
  constructor(private http: HttpClient) { }

  getbooks(){
    return this.http.get<any>(this.bookurl);
  }
  getbooksByid(id: number)
  {
    return this.http.get<any>(this.bookurl+id);
  }

  getCharcter()
  {
    return this.http.get(this.charcterUrl);
  }

  getCharcterById(id: number)
  {
    return this.http.get(this.charcterUrl+id);
  }
  getHouses()
  {
    return this.http.get(this.houseUrl);
  }

  getCHousesById(id: number)
  {
    return this.http.get(this.houseUrl+id);
  }
  

}
