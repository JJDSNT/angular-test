import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() index!: number;

  constructor(
    private elementRef: ElementRef,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
      },
    });
  }
}
