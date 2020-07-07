import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-updates',
  templateUrl: './home-updates.component.html',
  styleUrls: ['./home-updates.component.css']
})
export class HomeUpdatesComponent implements OnInit {

  BASE_PATH = "../../../assets/images/updates/";

  home_updates = [
    {
      'img': 'JohnAbraham.jpg',
      'content': 'Mr. John Abraham wishes the team best luck'
    },
    {
      'img': 'DNA_AutoFest.jpg',
      'content': 'RedShift Racing India at DNA AutoFest 2019'
    },
    {
      'img': 'Abhiyantriki2019.jpg',
      'content': 'RedShift Racing India at Abhiyantriki 2019'
    },
    {
      'img': 'MET_HCS.jpg',
      'content': 'RedShift Racing India at MET HCS'
    },
    {
      'img': 'up1.jpeg',
      'content': 'RedShift Racing India meets CM Devendra Fadnavis'
    },
    {
      'img': 'up2.jpeg',
      'content': 'RedShift Racing India at DNA Auto Show 2017'
    },
    {
      'img': 'up3.jpeg',
      'content': 'RedShift Racing India at Story of Makers by KVO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
