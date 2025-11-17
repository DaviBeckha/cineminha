import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Reviews {
  private apiUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getByContent(contentId: string) {
    return this.http.get<any[]>(`${this.apiUrl}?contentId=${contentId}`);
  }

  addReview(review: any) {
    return this.http.post<any>(this.apiUrl, review);
  }
}
