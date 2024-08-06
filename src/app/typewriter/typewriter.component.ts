import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TypewriterService } from './typewriter.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
    'Desenvolvimento web',
    'Transformação digital',
    'Arquitetura de soluções',
    'Engenharia de software',
    'Integração de sistemas',
    'Service Design',
    'Mapeamento de processos',
    'Automações',
    'Infraestrutura DevOps/SRE',
    'Engenharia de dados',
  ];

  private typewriterService = inject(TypewriterService);
  
  //typedText$: Observable<string>;
  typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(
    map((text) => {
      return text;
    })
  );
}
