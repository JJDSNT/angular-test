import { Component, OnInit } from '@angular/core';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [TranslocoModule, ContentComponent, AsyncPipe, NgFor, NgIf],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  contents: number[] = Array.from({ length: 10 }, (_, i) => i);

  constructor(private translocoService: TranslocoService) { }

  ngOnInit() {
    this.translocoService.langChanges$.subscribe(() => {
      ScrollTrigger.refresh();
    });
  }
}
