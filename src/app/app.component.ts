import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { FooterComponent } from './footer/footer.component';
import { ContentListComponent } from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TypewriterComponent,
    UnderConstructionComponent,
    FooterComponent,
    ContentListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JDias';
}
