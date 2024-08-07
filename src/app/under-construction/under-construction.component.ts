import { Component } from '@angular/core';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css'
})
export class UnderConstructionComponent {
  constructor(private translocoService: TranslocoService) {}
}
