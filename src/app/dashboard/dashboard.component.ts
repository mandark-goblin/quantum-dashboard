import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  patient = {
    f_name: "John",
    l_name: "Decker",
    dob: 1966,
    age: 54,
    session_count: 3,
    history: ["item 1", "item 2"],
    symptoms: ["item 1, item 2"],
    lifestyle: ["item 1, item 2"],
    water: ["item 1, item 2"],
    exercise: ["item 1, item 2"],
    work: ["item 1, item 2"],
    stress: ["item 1, item 2"],
    medications: ["item 1, item 2"],
    conductivity: 3,
    findings: ["item 1", "item 2"],
    diet: ["item 1, item 2"],
    food_restrictions: ["item 1", "item 2"],
    bio_tox: ["item 1, item 2"],
    remedies: ["item 1, item 2"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
