import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../models/Photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  limit = '?_limit=6';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    const fetcPhotos = this.http.get<Photo[]>(`${this.photosUrl}${this.limit}`);
    console.log('fetchPhotos: ', fetcPhotos.subscribe());
    return fetcPhotos;
  }
}
