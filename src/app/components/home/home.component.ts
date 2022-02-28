import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  minCheckInDate!: Date;
  maxCheckInDate!: Date;
  minCheckOutDate!: Date;
  maxCheckOutDate!: Date;
  dateForm!: FormGroup;
  myDateFilter = (m: Moment | null): boolean => {
    const dateNum = (m || moment()).date();
    return dateNum >= 10 && dateNum <= 25;
  };
  languageList = [
    'English(UK)',
    'Bahasa',
    'Vietnamese',
    'Português',
    'Español',
    'عربي',
    '日本',
  ];
  bangalore = [
    'Koramangala',
    'Majestic',
    'Indiranagar',
    'Madiwala',
    'Marathahalli',
    'Mg Road',
    'HSR Layout',
    'Jaya Nagar',
    'JP Nagar',
    'Hebbal',
  ];
  chennai = [
    'Mount Road',
    'Central Railway Station',
    'East Coast Road',
    'T Nagar',
    'Anna Nagar',
    'Tambaram',
    'Velachary',
    'Koyambedu',
    'International Airport',
    'Porur',
  ];
  delhi = [
    'Mahipalpur',
    'Karol Bagh',
    'New Delhi Railway Station',
    'Paharganj',
    'Laxmi Nagar',
    'Dwarka',
    'Velachary',
    'Koyambedu',
    'Pitampura',
    'Karol Bagh Metro Station',
    'Lajpat Nagar',
  ];
  gurgaon = [
    'HUDA City Center Metro',
    'MG Road',
    'Gurgaon Bus Stand',
    'Sector 14',
    'DLF Phase 3',
    'Sector 38',
    'Velachary',
    'KoyaSector 46',
    'Pitampura',
    'KarMedanta Hospital',
    'Golf Course Road',
    'Sector 29',
  ];
  hyderabad = [
    'Secundarabad Railway Station',
    'Gachibowli',
    'Madhapur',
    'L B Nagar',
    'Ameerpet',
    'Kukatpally',
    'Hitech City',
    'Miyapur',
    'Banjara Hills',
    'Begumpet',
  ];
  kolkata = [
    'New Town',
    'Howrah Railway Station',
    'Park Street',
    'Salt Lake City',
    'Kolkata International Airport',
    'Sealdah Railway Station',
    'Esplanade Railway station',
    'Dum Dum',
    'Park Circus',
    'Dum Dum Metro Station',
    'Begumpet',
  ];
  mumbai = [
    'Andheri East',
    'Vashi',
    'Thane',
    'Panvel',
    'Andheri West',
    'Dadar',
    'Bandra',
    'Dum Dum',
    'Saki Naka',
    'Navi Mumbai',
    'Kurla',
  ];
  noida = [
    'Sector 62',
    'Sector 18',
    'Sector 15',
    'Pari Chowk',
    'Greater Noida',
    'Noida City Center',
    'Sector 51',
    'Sector 66',
    'Ghaizabad',
    'Sector 63',
  ];
  pune = [
    'Shivaji Nagar',
    'Viman Nagar',
    'Pimpri Chinchwad',
    'Kharadi',
    'Pune Railway Station',
    'Baner',
    'Wakad',
    'Hadapsar',
    'Koregaon Park',
    'Hinjewadi',
  ];
  constructor(private formBuilder: FormBuilder) {
    console.log(this.minCheckInDate === undefined);
    // Set the minimum to current date of the month and December 31st a year in the future.
    const currentYear = new Date().getFullYear();

    /* logic for min check in and max check in date */
    this.minCheckInDate = new Date(
      currentYear,
      new Date().getMonth(),
      new Date().getDate()
    );
    this.maxCheckInDate = new Date(currentYear, 11, 31);

    /* logic for min check out and max check out date */
    this.minCheckOutDate = new Date(
      currentYear,
      new Date().getMonth(),
      new Date().getDate() + 1
    );
  }
  ngOnInit(): void {
    this.dateForm = new FormGroup({});
  }

  /* function for getting check in date */
  getCheckInDate() {
    console.log('clicked');
  }
}
