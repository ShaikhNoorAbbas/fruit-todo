import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits');
  }
  // Create a Fruit
  create(data: Fruit) {
    return this.httpClient.post<Fruit[]>('http://localhost:3000/fruits', data);
  }
  // update Fruit
  edit(id: string) {
    return this.httpClient.get<Fruit>(`http://localhost:3000/fruits/${id}`);
  }
  update(data: Fruit) {
    return this.httpClient.put<Fruit>(
      `http://localhost:3000/fruits/${data.id}`,
      data
    );
  }

  delete(id: any) {
    return this.httpClient.delete<Fruit>(`http://localhost:3000/fruits/${id}`);
  }
}
