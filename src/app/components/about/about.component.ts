import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("MineCalc about");
    this.meta.addTag({name: 'description', content: 'Minecraft calculator that allows players to calculate damage in PvP scenarios - about page'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

}
