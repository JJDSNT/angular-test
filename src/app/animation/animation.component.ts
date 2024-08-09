import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UnderConstructionComponent } from "../under-construction/under-construction.component";

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  standalone: true,
  imports: [UnderConstructionComponent],
})
export class AnimationComponent implements OnInit {
  //constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let sections = gsap.utils.toArray('.panel');

    //const sections = this.el.nativeElement.querySelectorAll('.panel');
    //const container = this.el.nativeElement.querySelector('.container');
    const containerElement = document.querySelector(".container");
    let arrow = document.querySelector('.arrow');
    let arrowRight = document.querySelector('.arrow-right');
    
    if(arrow){
      gsap.to(arrow, {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
    }
    
    if(arrowRight){
      gsap.to(arrowRight, {x: -12, ease: "power1.inOut", repeat: -1, yoyo: true});
    }

   // if (container) {
    if (containerElement instanceof HTMLElement) {
      const containerWidth = containerElement.offsetWidth;
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerWidth
          //end: () => "+=" + container.offsetWidth
        },
      });
    }
  }
  
}
