import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/Photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  limit = '?_limit=9';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}${this.limit}`);
  }

  postPhoto() { }
}
