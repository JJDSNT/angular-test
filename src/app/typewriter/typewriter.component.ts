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
    'Transformação digital',
    'Desenvolvimento web',
    'Engenharia de software',
    'Arquitetura de soluções',
    'Integração de sistemas',
    'Engenharia de dados',
    'Infraestrutura DevOps/SRE',
    'Automações',
    'Mapeamento de processos',
    'Service Design',
  ];
  
  private typewriterService = inject(TypewriterService);
  
  //typedText$: Observable<string>;
  typedText$ = this.typewriterService.getTypewriterEffect(this.titles).pipe(
    map((text) => {
      return text;
    })
  );
}
