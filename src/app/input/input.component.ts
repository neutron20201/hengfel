/*
 File: input.component.ts
    Author: Markó Dániel
    Copyright: 2024, Markó Dániel
    Group: 2024-25 SZOFT II/2/E
    Date: 2024-12-07
    Github: https://github.com/neutron20201
    Licenc: GNU GPL
*/


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InputComponent {
  radius: number = 0;
  height: number = 0;
  surfaceArea: number | null = null;

  calculateSurfaceArea() {
    this.surfaceArea = 2 * Math.PI * this.radius * (this.radius + this.height);
  }
}