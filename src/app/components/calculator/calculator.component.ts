import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("MineCalc calculator");
    this.meta.addTag({name: 'description', content: 'Minecraft calculator that allows players to calculate damage in PvP scenarios - calculator page'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

}
