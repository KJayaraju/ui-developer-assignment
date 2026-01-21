import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-templates-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,        // ✅ REQUIRED for ngModel
    MatButtonModule,
    MatIconModule,
    MatInputModule,    // ✅ REQUIRED for matInput
    MatSelectModule    // ✅ REQUIRED for mat-select & mat-option
  ],
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.css']
})

export class TemplatesListComponent implements OnInit {
  templates: any[] = [];
  selectedTemplate: any = null;
  selectedIndex: number | null = null;
activeSection: 'general' | 'variables' = 'general';

showSection(section: 'general' | 'variables') {
  this.activeSection = section;
}

  // default date
  currentDate: Date = new Date('2026-01-21');

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeDefaultTemplate();
    this.templates = JSON.parse(localStorage.getItem('templates') || '[]');

    // auto-select first template
    if (this.templates.length > 0) {
      this.selectTemplate(this.templates[0], 0);
    }
  }

  initializeDefaultTemplate() {
    const existing = JSON.parse(localStorage.getItem('templates') || '[]');

    if (existing.length === 0) {
      const defaultTemplate = {
  name: 'jaya raju',
  region: 'US',
  modules: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
  createdBy: 'Paul Rudd',
  status: 'Draft',
  variables: [
    { name: 'var-1', defaultValue: 'default 1', required: true },
    { name: 'var-2', defaultValue: 'default 2', required: false }
  ]
};


      localStorage.setItem('templates', JSON.stringify([defaultTemplate]));
    }
  }

  addVariable() {
  this.selectedTemplate.variables.push({
    name: `var-${this.selectedTemplate.variables.length + 1}`,
    defaultValue: '',
    required: false
  });
  this.saveTemplates();
}

removeVariable(index: number) {
  this.selectedTemplate.variables.splice(index, 1);
  this.saveTemplates();
}

saveTemplates() {
  localStorage.setItem('templates', JSON.stringify(this.templates));
}


  selectTemplate(template: any, index: number) {
    this.selectedTemplate = template;
    this.selectedIndex = index;
  }

  deleteTemplate(index: number) {
    this.templates.splice(index, 1);
    localStorage.setItem('templates', JSON.stringify(this.templates));
    this.selectedTemplate = null;
    this.selectedIndex = null;
  }

  editTemplate() {
    if (this.selectedIndex !== null) {
      this.router.navigate(['/edit-template', this.selectedIndex]);
    }
  }
}
