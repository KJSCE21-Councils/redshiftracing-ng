import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  BASE_PATH = 'assets/images/rsr/';

  gallery = [
    {
      'image': 'rsr1.jpeg'
    },
    {
      'image': 'rsr2.jpeg'
    },
    {
      'image': 'rsr3.jpeg'
    },
    {
      'image': 'rsr4.jpeg'
    },
    {
      'image': 'rsr5.jpeg'
    },
    {
      'image': 'rsr6.jpeg'
    },
    {
      'image': 'rsr7.jpeg'
    },
    {
      'image': 'rsr8.jpeg'
    },
    {
      'image': 'rsr9.jpeg'
    },
    {
      'image': 'rsr10.jpeg'
    },
    {
      'image': 'rsr11.jpeg'
    },
    {
      'image': 'rsr12.jpeg'
    },
    {
      'image': 'rsr13.jpeg'
    },
    {
      'image': 'rsr14.jpeg'
    },
    {
      'image': 'rsr15.jpeg'
    },
    {
      'image': 'rsr16.jpeg'
    },
    {
      'image': 'rsr17.jpeg'
    },
    {
      'image': 'rsr18.jpeg'
    },
    {
      'image': 'rsr19.jpeg'
    },
    {
      'image': 'rsr20.jpeg'
    },
    {
      'image': 'rsr21.jpeg'
    },
    {
      'image': 'rsr22.jpeg'
    },
    {
      'image': 'rsr23.jpeg'
    },
    {
      'image': 'rsr24.jpeg'
    },
    {
      'image': 'rsr25.JPEG'
    },
    {
      'image': 'rsr26.jpeg'
    },
    {
      'image': 'rsr27.jpeg'
    },
    {
      'image': 'rsr28.jpeg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
}
