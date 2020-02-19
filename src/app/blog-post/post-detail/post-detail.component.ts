import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { Comment } from '../../comment.model';
import { PostService } from '../../post.service';
import { CommentService } from '../../comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  comments: Comment[];

  getPostById(id: number): void {
    this._postService.getPostById(id)
        .subscribe(post => this.post = post);
  }

  getCommentsById(id: number): void {
    this._commentService.getCommentsById(id)
        .subscribe(comments => this.comments = comments);
  }

  constructor(private _postService: PostService, private _commentService: CommentService) { }

  ngOnInit(): void {
    this.getPostById(0);
    this.getCommentsById(0);
  }
}
