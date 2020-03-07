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
    session_count: 2,
    history: ["Swelling - Endoscopy", "GERD", "Scar Tissue - Esophagus", "Depression", "Anxiety"],
    symptoms: ["Low Energy", "Slow Digestion", "Constipation", "Brain Fog", "Memory Loss - Short Term", "Dry Skin"],
    lifestyle: ["item 1, item 2"],
    water: ["Bottled Water"],
    exercise: ["Cardio","Stregth Training"],
    work: ["Group Home"],
    stress: ["Sleeps through the night"],
    medications: ["Protonix", "Multi-V", "Psyllium Seed Husk"],
    conductivity: 79,
    findings: ["Candida", "Mold", "Glyphosate", "Left Spin"],
    diet: ["Antifungal Phase One],
    food_restrictions: ["Gluten", "Sugar", "Lactose"],
    bio_tox: "Lymph 2",
    left_spin: 1,
    detox: ["Liver & Gallbladder Flush", "Breath Work", "Dry Brushing"]
    remedies:[["Nat Body", "3+3"],["Flora","3+3"], ["Heptagest", "1 scoop per day"], ["Nat Colon", "2+2"], ["Spectralyte", "1 drop per ml"], ["Hypozymase", "1 per meal"]],
    questions: {
      root_canal: 1,
      mold: 0,
      missing_organs: 0,
      tap_water: 1,
      alcohol: 1,
      c_section: 0,
      birth_control: 0,
      implants: 1,
      uti: 0,
      mercury_fillings: 0,
      surgeries: 1,
      botox: 0,
      emf: 1
    },
    notes: ["note 1", "note 2"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
