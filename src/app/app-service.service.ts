import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  todos: string[] = ['Ganesh', 'Utsav'];

  constructor() {}
}
