import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aboutus',
  templateUrl: './home-aboutus.component.html',
  styleUrls: ['./home-aboutus.component.css']
})
export class HomeAboutusComponent implements OnInit {

  home_about = [
    {
      'title': 'Our Mission',
      'content': [
        'Build an efficient single seater All terrain vehicle with an impeccable Design. Continuous Innovation, improvisation and optimization To achieve our goals through assiduous work.'
      ]
    },
    {
      'title': 'Our Vision',
      'content': [
        'Compete with the best engineering minds nationally internationally. We believe ‘‘Manufacturing vehicles for all terrain is much cheaper than building roads for rough terrains’’.',
        'To aver that we are the best team among the elites.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
