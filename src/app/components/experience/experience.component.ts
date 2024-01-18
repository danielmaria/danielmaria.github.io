import Aos from 'aos';
import { Experience } from './../../interfaces/experience';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experience: Experience | null = null;

  ngOnInit(): void {
    Aos.init({
      duration: 750,
      delay: 150,
    });
  }
}
