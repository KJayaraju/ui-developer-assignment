import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-template',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent {
  templateName = '';
  region = '';
  structureCreated = false;
  isEditMode = false;
  modules: string[] = ['m1'];

  constructor(private router: Router) {}

  createStructure() {
    if (this.templateName && this.region) {
      this.structureCreated = true;
      this.isEditMode = false;
    }
  }

  addModule() {
    this.modules.push(`m${this.modules.length + 1}`);
  }

  removeModule(i: number) {
    this.modules.splice(i, 1);
  }

  saveTemplate() {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');

    templates.push({
      name: this.templateName,
      region: this.region,
      modules: this.modules
    });

    localStorage.setItem('templates', JSON.stringify(templates));
    this.router.navigate(['/templates']);
  }
  



modifyTemplate() {
  this.isEditMode = true;
}

}

