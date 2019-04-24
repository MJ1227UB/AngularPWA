import { Component, OnInit } from '@angular/core';
import { Photo } from './models/Photo.model';
import { Observable } from 'rxjs';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPWA';
  photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      this.photos = photos;
      console.log(this.photos);
    });
  }

}
