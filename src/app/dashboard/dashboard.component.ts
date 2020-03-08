import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p_questions = [];
  
  patient = {
    f_name: "John",
    l_name: "Decker",
    dob: 1966,
    age: 54,
    session_count: 2,
    history: ["Swelling - Endoscopy", "GERD", "Scar Tissue - Esophagus", "Depression", "Anxiety"],
    symptoms: ["Low Energy", "Slow Digestion", "Constipation", "Brain Fog", "Memory Loss - Short Term", "Dry Skin"],
    lifestyle: ["item 1, item 2"],
    water: ["Bottled Water", "Tap Water"],
    exercise: ["Cardio","Strength Training"],
    work: ["Group Home"],
    stress: ["moderate"],
    sleep: ["Sleeps through the night"],
    medications: ["Protonix", "Multi-V", "Psyllium Seed Husk"],
    conductivity: 79,
    findings: ["Candida", "Mold", "Glyphosate", "Left Spin"],
    diet: ["Antifungal Phase One"],
    food_restrictions: ["Gluten", "Sugar", "Lactose"],
    bio_tox: "Lymph 2",
    left_spin: 1,
    detox: ["Liver & Gallbladder Flush", "Breath Work", "Dry Brushing"],
    remedies:[["Nat Body", "3+3"],["Flora","3+3"], ["Heptagest", "1 scoop per day"], ["Nat Colon", "2+2"], ["Spectralyte", "1 drop per ml"], ["Hypozymase", "1 per meal"]],
    questions: {
      "Root Canal": true,
      "Mold": false,
      "Missing Organs": false,
      "Tap Water": true,
      "Alcohol": true,
      "C Section": false,
      "Birth Control": false,
      "Implants": true,
      "UTI": false,
      "Mercury Fillings": false,
      "Surgeries": true,
      "Botox": false,
      "EMF": true
    },
    notes: ["note 1", "note 2"]
  }

  constructor() { }

  ngOnInit(): void {

    for (const q in this.patient.questions) {
      if(this.patient.questions[q]){
        this.p_questions.push(q);
      }
    }


  }

}
