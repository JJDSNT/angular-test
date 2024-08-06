import { Component } from '@angular/core';
import { TypewriterComponent } from "../typewriter/typewriter.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'JDias';
  subtitle = 'Bem-vindo ao meu site';
}
