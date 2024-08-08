import { Component, Input, OnInit, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslocoService } from '@jsverse/transloco';
import { TypewriterService } from '../typewriter/typewriter.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() index!: number;

  title: string = '';
  content: string = '';

  private typewriterService = inject(TypewriterService);
  private translocoService = inject(TranslocoService);

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement.querySelector('.content-section');
    const textElement =
      this.elementRef.nativeElement.querySelector('.text-element');
    const imageElement =
      this.elementRef.nativeElement.querySelector('.image-element');

    this.translocoService
      .selectTranslateObject(`content${this.index}Title`)
      .subscribe((title) => {
        this.title = title;
      });
    this.translocoService
      .selectTranslateObject(`content${this.index}`)
      .subscribe((content) => {
        this.content = content;
      });

    if (textElement) {
      gsap.fromTo(
        textElement,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => {
              this.typewriterService.setTitle(this.title);
            },
          },
        }
      );
    }



    if (imageElement) {
      gsap.fromTo(
        imageElement,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  }
}
