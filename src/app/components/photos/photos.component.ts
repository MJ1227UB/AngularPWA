import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/Photo.model';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      this.photos = photos;
    });
  }

}
