import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { TypewriterService } from './typewriter.service';
import { map, Observable, Subscription, of } from 'rxjs';
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
    // Assina as traduções dos títulos
    this.subscription.add(
      this.translocoService
        .selectTranslateObject('typewriterTitles')
        .subscribe((titles: string[]) => {
          if (titles && titles.length) {
            // Observe changes in the title and perform actions if needed
            this.typewriterService.getTitleObservable().subscribe((title) => {
              console.log('Título recebido no componente: ' + title);
              // Adicione qualquer lógica adicional aqui, se necessário
            });
            this.typewriterService.getTitleObservable().subscribe((title) => {
              if (title) {
                // Se um título for recebido, exiba-o diretamente
                this.typedText$ = of(title);
              } else {
                // Se nenhum título for recebido, continue com o efeito de typewriter
                this.typedText$ = this.typewriterService
                  .getTypewriterEffect(titles)
                  .pipe(
                    map((text) => {
                      this.cdr.markForCheck(); // Força a detecção de mudanças
                      return text;
                    })
                  );
              }
              this.cdr.markForCheck(); // Força a detecção de mudanças
            });
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
