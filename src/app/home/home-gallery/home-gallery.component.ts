import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {

  BASE_PATH = "../../../assets/images/rsr/";
  home_gallery = [
    'rsr18.jpeg',
    'rsr28.jpeg',
    'rsr27.jpeg',
    'rsr26.jpeg',
    'rsr25.JPEG',
    'rsr24.jpeg',
  ]

  constructor() { }

  ngOnInit(): void {
  }
  customOptionsHomeGallery: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
