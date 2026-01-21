import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-template',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  index!: number;
  template: any = { name: '', region: '', modules: [] };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    this.template = { ...templates[this.index] };
  }

  addModule() {
    this.template.modules.push(`m${this.template.modules.length + 1}`);
  }

  removeModule(i: number) {
    this.template.modules.splice(i, 1);
  }

  updateTemplate() {
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    templates[this.index] = this.template;
    localStorage.setItem('templates', JSON.stringify(templates));
    this.router.navigate(['/templates']);
  }
}
