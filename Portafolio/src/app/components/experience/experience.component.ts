import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList:any;

  constructor(private datosExperiencia:ExpService) { }

  ngOnInit(): void {
    this.datosExperiencia.getExp().subscribe(data => {
      this.experienceList=data;
    });

  }

}
