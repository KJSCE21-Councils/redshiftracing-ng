import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-timeline',
  templateUrl: './home-timeline.component.html',
  styleUrls: ['./home-timeline.component.css']
})
export class HomeTimelineComponent implements OnInit {

  BASE_PATH = "../../../assets/images/success/";

  home_timeline = [
    {
      "img": "tabeer.jpeg",
      "timeline_inverted": "",
      "tooltip_inverted": "invert",
      "title": "Tabeer",
      "competitions": [
        "BAJA SAE Rochester, New York 2019",
        "Mega ATV Championship"
      ],
      "achievements": [
        "1st Place - Drag Race, Mega ATV"
      ],
      "tech_highlights": [
        "Vibration Isolation for Engine",
        "Self made brake calliper for inboard braking"
      ]
    },
    {
      "img": "yudhaan3.jpg",
      "timeline_inverted": "timeline-inverted",
      "tooltip_inverted": "",
      "title": "Yudhaan 3.0",
      "competitions": [
        "BAJA SAE Indore 2019",
        "BAJA SAE USA, Oregon 2018"
      ],
      "achievements": [
        "4th Place - India Virtuals",
        "9th Place - Design at Indore",
        "3rd Place – Overall ranking in India",
        "8th Place – Cost Evaluation",
        "6th Place – Business Plan Presentation"
      ],
      "tech_highlights": [
        "Tuning of the CVT to ensure efficient working of transmission failure."
      ]
    },
    {
      "img": "yudhaan2.jpg",
      "timeline_inverted": "",
      "tooltip_inverted": "invert",
      "title": "Yudhaan 2.0",
      "competitions": [
        "Enduro Student India 2018.",
        "BAJA SAE India 2018."
      ],
      "achievements": [
        "23rd Place – Overall amongst 90 participating teams.",
        "3rd Place – Engineering Design.",
        "4th Place – Business Plan Presentation.",
        "17th Place – DirtX."
      ],
      "tech_highlights": [
        "Self Made Axle.",
        "Self Made Brake Calipers.",
        "Custom Made Brake Lines."
      ]
    },
    {
      "img": "yudhaan.jpg",
      "timeline_inverted": "timeline-inverted",
      "tooltip_inverted": "",
      "title": "Yudhaan 1.0",
      "competitions": [
        "Enduro Student India 2017.",
        "BAJA SAE India 2017.",
        "BAJA SAE USA, California 2017."
      ],
      "achievements": [
        "11th Place – Overall ranking in India.",
        "9th Place – Endurance Race.",
        "3rd Place – Business Plan Presentation.",
        "15th Place – Acceleration."
      ],
      "tech_highlights": ""
    },
    {
      "img": "raudr3.jpg",
      "timeline_inverted": "",
      "tooltip_inverted": "invert",
      "title": "Raudr III",
      "competitions": [
        "Baja SAE India,Indore 2015."
      ],
      "achievements": [
        "Completed all dynamic events and endurance race.",
        "7th Place – Hill Climb.",
        "11th Place – Static events.",
        "2nd Place – Overall Ranking in Mumbai."
      ],
      "tech_highlights": [
        "Suspension design changed to Semi trailing arm in rear.",
        "Weight reduction of 70kgs was achieved compared to Raudra2.",
        "Steering radius was further reduced to 2.16m.",
        "Driver effort was comparitvely less."
      ]
    },
    {
      "img": "raudr2.jpg",
      "timeline_inverted": "timeline-inverted",
      "tooltip_inverted": "",
      "title": "Raudr II",
      "competitions": [
        "Sasol Baja South Africa Challenge 2014."
      ],
      "achievements": [
        "Best Social Team Award.",
        "1st Place – Business Plan Presentation.",
        "4th Place – Car Design Evaluation.",
        "6th Place – Design Report.",
        "10th Place – Overall Ranking."
      ],
      "tech_highlights": [
        "Overall weight reduction of 38 Kgs from the previous car.",
        "Implementation of a differential for the 1st time.",
        "Cost effective and reduced weight for the self-designed gearbox assembly.",
        "Steering turning radius reduced from 4.00 m to 2.85 m.",
        "Tuning of the CVT to ensure efficient working of transmission failure.",
        "Serviceability ensured through proper design of assembly layout.",
        "Pneumatic shock absorbers for suspension."
      ]
    },
    {
      "img": "raudr.jpg",
      "timeline_inverted": "",
      "tooltip_inverted": "invert",
      "title": "Raudr",
      "competitions": [
        "BAJA SAE India 2014."
      ],
      "achievements": [
        "1st time completed all Dynamic and Static events.",
        "1st time qualified for final Endurance race.",
        "34th Grid position for Endurance race.",
        "Appreciation for aesthetics of the car."
      ],
      "tech_highlights": [
        "Self designed gearbox assembly.",
        "Tuning of the CVT to ensure efficient working of transmission failure.",
        "Pneumatic shock absorbers for suspension.",
        "Glass fibre used for bodyworks."
      ]
    },
    {
      "img": "blunderbuss.jpg",
      "timeline_inverted": "timeline-inverted",
      "tooltip_inverted": "",
      "title": "BlunderBuss",
      "competitions": [
        "Baja SAE India 2013."
      ],
      "achievements": "",
      "tech_highlights": ""
    },
    {
      "img": "rsr11-12.jpg",
      "timeline_inverted": "",
      "tooltip_inverted": "invert",
      "title": "RSR 2011-12",
      "competitions": [
        "Baja SAE Auburn 2012."
      ],
      "achievements": [
        "24th Place – Car Design Evaluation.",
        "Top amongst all Asian teams."
      ],
      "tech_highlights": ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
