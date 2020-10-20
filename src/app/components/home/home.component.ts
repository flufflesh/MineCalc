import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, public title: Title) { }

  ngOnInit(): void {
      this.title.setTitle("MineCalc home");
      this.meta.addTag({name: 'description', content: 'Minecraft calculator that allows players to calculate damage in PvP scenarios'});
      this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

}
