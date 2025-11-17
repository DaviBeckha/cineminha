import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Categories[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Categories>(`${this.apiUrl}/${id}`);
  }
}
