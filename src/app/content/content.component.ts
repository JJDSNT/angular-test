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

  title: string = '';
  content: string = '';

  constructor(
    private elementRef: ElementRef,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement.querySelector('.content-section');

    this.translocoService.selectTranslateObject(`content${this.index}Title`).subscribe(title => {
      this.title = title;
    });
    this.translocoService.selectTranslateObject(`content${this.index}`).subscribe(content => {
      this.content = content;
    });

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        console.log('Element entered view:', el);
        gsap.to(el, { opacity: 1, y: 0, duration: 1 });
      }
    });
  }
}
