import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  BASE_PATH = "../../../assets/images/sponsors/"

  sponsors = [
    {
      "logo": "Somaiya Trust.jpg",
      "name": "Somaiya Trust"
    },
    {
      "logo": "Swastik-Lasers.jpg",
      "name": "Swastik Lasers"
    },
    {
      "logo": "ScanTech.jpg",
      "name": "ScanTech"
    },
    {
      "logo": "MDDSCT.jpg",
      "name": "MDDSCT"
    },
    {
      "logo": "Hari-Om.jpg",
      "name": "Hari Om"
    },
    {
      "logo": "Veedol.jpg",
      "name": "Veedol"
    },
    {
      "logo": "PPImpex.jpg",
      "name": "P. P. Impex"
    },
    {
      "logo": "Malkar.jpg",
      "name": "Malkar Industries"
    },
    {
      "logo": "SolidWorks.jpg",
      "name": "SolidWorks"
    },
    {
      "logo": "Godrej Aerospace.jpg",
      "name": "Godrej Aerospace"
    },
    {
      "logo": "Vishwakarma Industries.jpg",
      "name": "Vishwakarma Industries"
    },
    {
      "logo": "Kutchi Jain Oswal.jpg",
      "name": "Kutchi Jain Oswal"
    },
    {
      "logo": "Deep Electricals.jpg",
      "name": "Deep Electricals"
    },
    {
      "logo": "Canara Bank.jpg",
      "name": "Canara Bank"
    },
    {
      "logo": "Cotter.jpg",
      "name": "Cotter Plants"
    },
    {
      "logo": "Elitetechnog Groups.jpg",
      "name": "Elitetechnog Groups"
    },
    {
      "logo": "Atul.jpg",
      "name": "Atul"
    },
    {
      "logo": "Autoforms.jpg",
      "name": "Autoforms"
    },
    {
      "logo": "Alu-Fin.jpg",
      "name": "Alu-Fin"
    },
    {
      "logo": "Wellness.jpg",
      "name": "Wellness"
    },
    {
      "logo": "SusProg3D.jpg",
      "name": "SusProg3D"
    },
    {
      "logo": "NKGSB Bank.jpg",
      "name": "NKGSB Bank"
    },
    {
      "logo": "Purohit.jpg",
      "name": "Purohit Steel"
    },
    {
      "logo": "TeXtreme.jpg",
      "name": "TeXtreme"
    },
    {
      "logo": "Adarsh.jpg",
      "name": "Adarsh"
    },
    {
      "logo": "Arya.jpg",
      "name": "Arya"
    },
    {
      "logo": "Loctite.jpg",
      "name": "Loctite"
    },
    {
      "logo": "Saraswat Bank.jpg",
      "name": "Saraswat Bank"
    },
    {
      "logo": "Supermoto.jpg",
      "name": "Supermoto Outfits"
    },
    {
      "logo": "Hiten Uprights.jpg",
      "name": "Hiten Uprights"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
