import { Component } from '@angular/core';
import awardsData from './awards.json';

interface Awards{
  name: String;
  category:String;
  research: String;
  year: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-adani-digital';

  awards: Awards[] = awardsData;
}
