import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TypewriterService } from './typewriter.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypewriterComponent {
  titles = [
    "Desenvolvimento web",
    "Transformação digital",
    "Arquitetura de soluções",
    "Engenharia de software",
    "Integração de sistemas",
    "Service Design",
    "Mapeamento de processos",
    "Automações",
    "Infraestrutura DevOps/SRE",
    "Engenharia de dados"
  ]

  private typewriterService = inject(TypewriterService);
  //typedText$: Observable<string>;

  typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(
    map((text) => {
      //console.log('Emitting text:', text);
      return text;
    })
  );
}

/*
  constructor() {
    console.log('Initializing TypewriterComponent');
    console.log('Titles:', this.titles);
    this.typedText$ = this.typewriterService
      .getTypewriterEffect(this.titles)
      .pipe(
        map((text) => {
          console.log('Emitting text:', text);
          return text;
        })
      );

      this.typedText$.subscribe({
        next: value => console.log('Subscription next value:', value),
        error: err => console.error('Subscription error:', err),
        complete: () => console.log('Subscription complete')
      });

  }
      
}
*/
