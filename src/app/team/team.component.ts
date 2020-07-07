import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  BASE_PATH = "../../assets/images/teams/";

  constructor() { }

  ngOnInit(): void {
  }

  teams = [
    {
      "title": "2019-20",
      "team_photo": "Team 2019-20.jpg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Kaushal Wattamwar"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Chaitanya Sonalkar"
          ]
        },
        {
          "designation": "Admin",
          "names": [
            "Kaizer Mogal"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Kaushal Wattamwar",
            "Saurabh Jain"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Saurabh Jain (Head)",
            "Vinay Jain",
            "Tirth Jhaveri",
            "Yash Navsarikar",
            "Kruthika Gangaraju",
            "Roosheet Mehta",
            "Sarthak Vora",
            "Nihar Merchant",
            "Junaidali Irfan Surti"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Harsh Savla (Head)",
            "Ankit Chhajed",
            "Akshay Patel",
            "Devansh Dedhia",
            "Hitansh S. Mehta",
            "Tejas R Jain",
            "Rhythm Shah"
          ]
        },
        {
          "designation": "Suspension & Steering",
          "names": [
            "Chirag Parasia (Suspension Head)",
            "Archit Furia (Steering Head)",
            "Jay Shah",
            "Kevalya Dhami",
            "Yash Chandarana",
            "Dhruv Jain",
            "Tejas Patil",
            "Rohan Shende",
            "Rachit Singh"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Suraj Gandhi (Head)",
            "Mitesh Butala",
            "Aayush Jay Gujrathi",
            "Prasad Borkar",
            "Sameeksha Poojary",
            "Nupoor Panchal"
          ]
        },
        {
          "designation": "DAQ",
          "names": [
            "Swetha Chiliveri",
            "Dhvanit H Bhimani",
            "Prathmesh Bojalwar",
            "Siddhi Mali"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Baiju Dodhia"
          ]
        }
      ]
    },
    {
      "title": "2018-19",
      "team_photo": "Team 2018-19.jpg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Husain Fidvi"
          ]
        },
        {
          "designation": "Vice Captain",
          "names": [
            "Parth Shah"
          ]
        },
        {
          "designation": "Team Admin",
          "names": [
            "Vasu Vara"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Ali Arsiwala",
            "Husain Fidvi"
          ]
        },
        {
          "designation": "Suspension & Steering",
          "names": [
            "Ali Arsiwala (Head)",
            "Chetan Rane (Head)",
            "Nijanand Sarawate",
            "Chirag Parasia",
            "Archit Furia",
            "Kiran Karkera",
            "Jay Shah",
            "Kevalya Dhami"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Akash Anghan",
            "Sumukh Dedhia",
            "Kaushal Wattamwar",
            "Harsh Savla",
            "Ankit Chhajed",
            "Akshay Patel",
            "Harshal Dharani"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Rohit Augustine (Head)",
            "Erwin Joseph",
            "Rushabh Shah",
            "Atharva Ghaisas",
            "Suraj Gandhi"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Viral Chheda (head)",
            "Varun Bhanarkar",
            "Richie Mathew",
            "Chaitanya Sonalkar",
            "Saurabh Jain",
            "Vinay Jain",
            "Tirth Jhaveri"
          ]
        },
        {
          "designation": "Marketing & Administration",
          "names": [
            "Fatema Motiwala",
            "Kaizer Mogal"
          ]
        }
      ]
    },
    {
      "title": "2017-18",
      "team_photo": "Team 2017-18.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Aditya Purohit"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Yash Bhatt"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Aditya Purohit",
            "Yash Bhatt"
          ]
        },
        {
          "designation": "Suspension & Steering",
          "names": [
            "Amit Petare",
            "Rahul Sawant",
            "Pranav Kunte",
            "Ali Arsiwala",
            "Husain Fidvi",
            "Chetan Rane",
            "Nijananol Sarawate",
            "Varun Bhanarkar"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Shitija Shetty",
            "Yash Nadagire",
            "Yash Bhatt",
            "Parth Shah",
            "Akash Patel"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Ashish Maurya",
            "Mihir Patil",
            "Sumukh Dedhia",
            "Rohith Augustine",
            "Rushabh Vora",
            "Erwin Joseph"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Gopesh Chilvari",
            "Viral Chedda",
            "Richie Mathew",
            "Varun Bhanarkar"
          ]
        },
        {
          "designation": "Marketing & Administration",
          "names": [
            "Aditya Purohit",
            "Chaitanya Sheth"
          ]
        }
      ]
    },
    {
      "title": "2016-17",
      "team_photo": "Team 2016-17.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Harsh Jain"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Hrisheekesh Patil"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Hrisheekesh Patil",
            "Pranav Pai",
            "Harsh Jain"
          ]
        },
        {
          "designation": "Suspension & Steering",
          "names": [
            "Kushal Visaria",
            "Abhishek Shah",
            "Aditya Puhorit",
            "Smit Patel",
            "Rahul Sawant",
            "Pranav Kunte",
            "Siddesh Khare"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Rajat Tank",
            "Rahul Khankar",
            "Yash Bhatt",
            "Shitija Shetty",
            "Abhinav Kshrisagar",
            "Karan Mehta",
            "Pranav Pai"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Dnyanesh Mahajan",
            "Shikin Shetty",
            "Rahil Shah",
            "Ashish Mourya",
            "Neha Kesarkar",
            "Mihir Patil",
            "Chaitanya Sheth"
          ]
        },
        {
          "designation": "CAD",
          "names": [
            "Umang Aboti",
            "Karan Shah"
          ]
        },
        {
          "designation": "Composites",
          "names": [
            "Umang Aboti"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Gopesh Chilvari",
            "Dhairya Mehta",
            "Rohan Vikam"
          ]
        },
        {
          "designation": "Vehicle Dynamics",
          "names": [
            "Hrisheekesh Patil",
            "Jalpesh Bhadra"
          ]
        },
        {
          "designation": "Administration",
          "names": [
            "Dnyanesh Mahajan"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Neha Naikwade",
            "Pranav Pai",
            "Dhairya Mehta",
            "Smit Patel",
            "Neha Kesarkar"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Smit Thakkar"
          ]
        }
      ]
    },
    {
      "title": "2015-16",
      "team_photo": "Team 2015-16.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Harsh Jain"
          ]
        },
        {
          "designation": "Vice-Captain",
          "names": [
            "Dhairya Gala"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Hrisheekesh Patil"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Harsh Jain",
            "Hrisheekesh Patil"
          ]
        },
        {
          "designation": "Suspension",
          "names": [
            "Abhishek Shah",
            "Kushal Visaria"
          ]
        },
        {
          "designation": "Steering",
          "names": [
            "Jalpesh Bhadra",
            "Siddesh Khaire"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Pranav Pai",
            "Rajat Tank",
            "Rahul Khankar",
            "Karan Mehta"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Aayush Shah",
            "Dnyanesh Mahajan",
            "Shikin Shetty"
          ]
        },
        {
          "designation": "CAD",
          "names": [
            "Umang Aboti",
            "Karan Shah"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Chandan Gupta",
            "Dhairya Gala"
          ]
        },
        {
          "designation": "Vehicle Dynamics",
          "names": [
            "Hrisheekesh Patil"
          ]
        },
        {
          "designation": "Administration",
          "names": [
            "Dnyanesh Mahajan",
            "Shivang Doshi"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Pranav Pai"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Harsh Jain"
          ]
        }
      ]
    },
    {
      "title": "2014-15",
      "team_photo": "Team 2014-15.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Rohit Salgaonkar"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Sagar Shah"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Sagar Shah",
            "Nimish Ojale"
          ]
        },
        {
          "designation": "Suspension & Steering",
          "names": [
            "Nimish Ojale",
            "Varad Narayanan",
            "Shijoy Sam",
            "Sagar Kale"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Soham Gokhale",
            "Rohit Salgaonkar",
            "Priyank Mehta",
            "Hrisheekesh Patil",
            "Pranav Pai",
            "Rahul Khankar",
            "Rajat Tank"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Somnath Rajanga",
            "Siddharth Sridharan",
            "Aayush Shah",
            "Shrenik Mehta",
            "Dnyanesh Mahajan",
            "Dhaval Khunk",
            "Shikin Shetty"
          ]
        },
        {
          "designation": "CAD & Electronics",
          "names": [
            "Sagar Shah",
            "Smit Baua"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Tejas Patel",
            "Sanket Kulkarni",
            "Chandan Gupta",
            "Rohan Rane",
            "Dhairya Gala",
            "Karan Shah",
            "Ronak Vikram"
          ]
        },
        {
          "designation": "Steering",
          "names": [
            "Harshal Gala",
            "Jalpesh Bhadra",
            "Siddesh Khaire"
          ]
        },
        {
          "designation": "Administration",
          "names": [
            "Smit Baua",
            "Sanket Kulkarni"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Rohit Dharap"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Siddharth Sridharan",
            "Shivang Doshi"
          ]
        }
      ]
    },
    {
      "title": "2013-14",
      "team_photo": "Team 2013-14.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Sagar Shah"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Varad Narayanan"
          ]
        },
        {
          "designation": "Drivers",
          "names": [
            "Rohan Vakharia"
          ]
        },
        {
          "designation": "Suspension",
          "names": [
            "Varad Narayanan",
            "Nimish Ojale",
            "Shijoy Sam",
            "Harshal Gala"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Soham Gokhale",
            "Rohit Salgaonkar",
            "Priyank Mehta"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Siddharth Sridharan",
            "Somnath Rajanga"
          ]
        },
        {
          "designation": "CAD & Electronics",
          "names": [
            "Sagar Shah",
            "Prashant Sharma",
            "Smit Baua"
          ]
        },
        {
          "designation": "Chassis",
          "names": [
            "Tejas Patel",
            "Sanket Kulkarni",
            "Rohan Rane"
          ]
        },
        {
          "designation": "Steering",
          "names": [
            "Varad Narayanan",
            "Nimish Ojale",
            "Shijoy Sam",
            "Harshal Gala"
          ]
        },
        {
          "designation": "Administration",
          "names": [
            "Rohan Vakharia",
            "Smit Baua",
            "Sanket Kulkarni"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Saurabh Sangamwa",
            "Rohit Dharap",
            "Pratik Saraf",
            "Varad Narayanan",
            "Sagar Shah"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Pratik Saraf",
            "Shivang Doshi"
          ]
        }
      ]
    },
    {
      "title": "2012-13",
      "team_photo": "Team 2012-13.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Hardik Joshi"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Varun Unadkat"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Harshit Shah"
          ]
        },
        {
          "designation": "Suspension",
          "names": [
            "Anirudh Pai",
            "Amit Pradhan",
            "Varad Narayanan"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Varun Anadkat",
            "Nadeem Ganchi",
            "Soham Gokhale",
            "Priyank Mehta"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Apurv Shah",
            "Amol Somde",
            "Siddharth Sridharan"
          ]
        },
        {
          "designation": "CAD & Electronics",
          "names": [
            "Sagar Shah",
            "Muzammil Harji",
            "Anisha Cherodian",
            "Dhwani Sanghvi",
            "Dishita Shah"
          ]
        },
        {
          "designation": "Chassis & Manufacturing",
          "names": [
            "Hardik Maniar",
            "Akash Mehta",
            "Chaitanya Joshi",
            "Tejas Patel"
          ]
        },
        {
          "designation": "Steering",
          "names": [
            "Anirudh Pai",
            "Amit Pradhan",
            "Varad Narayanan"
          ]
        },
        {
          "designation": "Manufacturing",
          "names": [
            "Saurabh Sangamwa",
            "Sagar Vani",
            "Pranay Satra",
            "Sagar Shah",
            "Prashant Sharma",
            "Rahul Kalbut"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Harshit Shah",
            "Arpit Kapdi",
            "Anisha Cherodian",
            "Dhwani Sanghvi",
            "Dishita Shah"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Shivang Doshi"
          ]
        }
      ]
    },
    {
      "title": "2011-12",
      "team_photo": "Team 2011-12.jpeg",
      "members": [
        {
          "designation": "Captain",
          "names": [
            "Muzammil Hirji"
          ]
        },
        {
          "designation": "Technical Coordinator",
          "names": [
            "Mihir Pai"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Urvil Matalia"
          ]
        },
        {
          "designation": "Suspension",
          "names": [
            "Rahul Munot",
            "Sagar Panchal",
            "Anirudh Pai"
          ]
        },
        {
          "designation": "Transmission",
          "names": [
            "Manan Trivedi",
            "Varun Anadkat"
          ]
        },
        {
          "designation": "Brakes",
          "names": [
            "Mihir Patel",
            "Varun Saraswat"
          ]
        },
        {
          "designation": "CAD & Electronics",
          "names": [
            "Muzammil Hirji",
            "Feroz Saifee",
            "Anisha Cherodian",
            "Dhwani Sanghvi",
            "Dishita Shah"
          ]
        },
        {
          "designation": "Chassis & Manufacturing",
          "names": [
            "Feroz Saifee",
            "Salman Memon",
            "Harsh Shah",
            "Shyam Takker",
            "Ankit Dahiya",
            "Hardik Joshi",
            "Pranay Satra",
            "Sagar Shah"
          ]
        },
        {
          "designation": "Steering",
          "names": [
            "Rahul Munot",
            "Sagar Panchal",
            "Anirudh Pai"
          ]
        },
        {
          "designation": "Administration",
          "names": [
            "Rahul Munot",
            "Hardik Joshi"
          ]
        },
        {
          "designation": "Marketing & Publicity",
          "names": [
            "Urvil Matalia",
            "Harsh Shah",
            "Anisha Cherodian",
            "Dhwani Sanghvi",
            "Dishita Shah"
          ]
        },
        {
          "designation": "Website Admin",
          "names": [
            "Shivang Doshi"
          ]
        }
      ]
    },
  ];

}
