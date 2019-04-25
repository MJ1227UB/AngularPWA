import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/Photo.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent {
  @Input() photo: Photo;

}
