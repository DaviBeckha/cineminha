import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../shared/models/content';   // <-- IMPORTAR O MODEL

@Injectable({
  providedIn: 'root',
})
export class Contents {
  private apiUrl = 'http://localhost:3000/contents';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Content[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  getByCategory(categoryId: string) {
    return this.http.get<Content[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }
}
