import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IPost } from './posts/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  todos: string[] = ['Ganesh', 'Utsav'];
  private postsData$: Subject<IPost[]> = new Subject();

  constructor(private _http: HttpClient) {}

  // This method will load the post data from APIs
  getPosts() {
    this._http.get<IPost[]>(`${environment.BASE_URL}/posts`).subscribe({
      next: (val: IPost[]) => {
        this.postsData$.next(val);
      },
    });
  }

  get posts$(): Observable<IPost[]> {
    return this.postsData$;
  }
}
