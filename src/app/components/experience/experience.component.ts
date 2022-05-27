import { Experience } from './../../interfaces/experience';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
