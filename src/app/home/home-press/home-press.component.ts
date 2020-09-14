import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-press',
  templateUrl: './home-press.component.html',
  styleUrls: ['./home-press.component.css']
})
export class HomePressComponent implements OnInit {

  BASE_PATH = "assets/images/press/";

  home_stories = [
    {
      'title': 'Crank it!',
      'link': 'https://carbiketech.com/redshift-racing-fights-hard-sasol-baja-2014/',
      'content': 'KJSCE-The “RAUDR II” recently participated in the Sasol Baja 2014 – a competition held in South Africa & organised by Society of Automotive Engineers.'
    },
    {
      'title': 'Motoroids India',
      'link': 'http://www.motoroids.com/news/team-red-shift-of-k-j-somaiya-college-of-engineering-showcases-their-atv-rauder/',
      'content': 'At the SASOL BAJA 2014, the it was the only Indian team amongst all other colleges to represent India in the competition held in South Africa.'
    },
    {
      'title': 'Car Trade',
      'link': 'https://www.cartrade.com/news/india-s-all-terrain-car-outshines-in-sasol-baja-south-africa-challenge-2014-126211.html',
      'content': 'This time around 25 brilliant student minds from KJ Somaiya college have built an All-terrain vehicle that shall represent India at the Sasol BAJA SAC 2014.'
    },
    {
      'title': 'Pocket News',
      'link': 'https://www.pocketnewsalert.com/search/label/KJ%20Somaiya%20College%20of%20Engineering?max-results=5',
      'content': 'After consistently performing for 9 years,the students of KJ Somaiya College of Engg unveiled their new prototyp "RIGEL".'
    },
    {
      'title': 'Solarnews',
      'link': 'http://www.solarisimages.com/image_details.php?id=253989',
      'content': 'Team Redshift of K J Somaiya College of Engineering demonstrates the All Terrain Vehicle Raudr 2 in Mumbai, India on March 19, 2015.'
    }
  ]

  home_press = [
    {
      'img': 'press1.jpeg'
    },
    {
      'img': 'press2.jpeg'
    },
    {
      'img': 'press3.jpeg'
    },
    {
      'img': 'press4.jpeg'
    },
    {
      'img': 'press5.jpeg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  customOptionsHomeStories: any = {
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptionsHomePress: any = {
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
