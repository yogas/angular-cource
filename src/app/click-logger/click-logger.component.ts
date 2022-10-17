import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-logger',
  templateUrl: './click-logger.component.html',
  styleUrls: ['./click-logger.component.css']
})
export class ClickLoggerComponent implements OnInit {

  secretVisible: boolean = true;
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSecret(): void {
    this.secretVisible = !this.secretVisible;
    this.logs.push(`${new Date()}, click count is ${this.logs.length+1}`)
  }

  getStyle(index: number): {backgroundColor?: string} {
    if (index<5) return {}
    return {
      backgroundColor: 'darkblue'
    }
  }

  getClass(index: number): {white?: boolean} {
    if (index<5) return {}
    return {
      white: true
    }
  }

}
