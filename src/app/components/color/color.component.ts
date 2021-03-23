import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color | null;
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCurrentColorClass(color: Color) {
    if (this.currentColor == color) {
      return 'list-group-item list-group-item-dark';
    } else {
      return 'list-group-item';
    }
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }
  setAllColor() {
    this.currentColor = null;
  }
  getAllColorClass() {
    if (!this.currentColor) {
      return 'list-group-item list-group-item-dark';
    } else {
      return 'list-group-item';
    }
  }
}
