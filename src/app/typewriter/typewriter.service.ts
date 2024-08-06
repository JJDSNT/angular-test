import { Injectable } from '@angular/core';
import { interval, concat, from, of } from 'rxjs';
import {
  map,
  take,
  delay,
  ignoreElements,
  concatMap,
  repeat,
} from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {
  private type({
    word,
    speed,
    backwards = false,
  }: {
    word: string;
    speed: number;
    backwards?: boolean;
  }) {
    return interval(speed).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1)
      ),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 30, backwards: true }),
      of('').pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]) {
    console.log('getTypewriterEffect called with titles:', titles);
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      repeat()
    );
  }
}
