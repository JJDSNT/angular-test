import { ChangeDetectionStrategy, Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { TypewriterService } from './typewriter.service';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe, TranslocoModule],
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypewriterComponent implements OnInit {
  typedText$: Observable<string> = new Observable<string>();
  private typewriterService = inject(TypewriterService);
  private translocoService = inject(TranslocoService);
  private cdr = inject(ChangeDetectorRef);
  
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      this.translocoService.selectTranslateObject('typewriterTitles').subscribe((titles: string[]) => {
        if (titles && titles.length) {
          this.typedText$ = this.typewriterService.getTypewriterEffect(titles).pipe(
            map((text) => {
              //console.log('Typed text:', text);
              this.cdr.markForCheck(); // Força a detecção de mudanças
              return text;
            })
          );

          this.subscription.add(
            this.typedText$.subscribe(text => {
              //console.log('Text emitted by typedText$: ', text);
            })
          );
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
