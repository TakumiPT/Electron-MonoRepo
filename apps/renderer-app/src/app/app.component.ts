import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'renderer-app in electron';
  version!: string;
  name!: string;
  constructor(titleService: Title, private readonly appService: AppService) {
    titleService.setTitle(this.title);
  }

  async ngOnInit(): Promise<void> {
    this.version = await this.appService.version();
    this.name = await this.appService.name();
  }

}
