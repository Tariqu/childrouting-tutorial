import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { IPost } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts!: IPost[];

  constructor(public _appService: AppServiceService) {}

  ngOnInit(): void {
    this._appService.getPosts();
  }

  ngOnDestroy(): void {}
}
