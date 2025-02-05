import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Electron Angular NestJS Doubleshot';
  constructor(private readonly titleService: Title, private readonly app: AppService) {
    this.titleService.setTitle(this.title);
  }

  async chat(value: string) {    
    const response = await this.app.chat(value);
    console.log(response);
  }

}
