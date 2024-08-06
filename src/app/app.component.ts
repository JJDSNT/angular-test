import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TypewriterComponent } from "./typewriter/typewriter.component";
import { UnderConstructionComponent } from "./under-construction/under-construction.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TypewriterComponent, UnderConstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JDias';
}
