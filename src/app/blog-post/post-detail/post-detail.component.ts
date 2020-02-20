import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Post } from '../../post.model';
import { Comment } from '../../comment.model';
import { PostService } from '../../post.service';
import { CommentService } from '../../comment.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post: Post;
  comments: Comment[];
  sub: any;
  idPost: number

  // public commentForm = new FormGroup({
  //   idPost: new FormControl(),
  //   comment: new FormControl(),
  //   author: new FormControl(),
  // });

  public commentForm = this.fb.group({
      idPost: null,
      comment: ''
  });

  getPostById(id: number): void {
    this._postService.getPostById(id)
        .subscribe(post => this.post = post);
  }

  getCommentsById(id: number): void {
    this._commentService.getCommentsById(id)
        .subscribe(comments => this.comments = comments);
  }

  addComment(comment: Comment): void {
    this._commentService.addComment(comment);
  }

  constructor(private router: Router, private route: ActivatedRoute, private _postService: PostService, private _commentService: CommentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idPost = +params['id'];
      this.getPostById(this.idPost);
      this.getCommentsById(this.idPost);
    });

    this.commentForm.setValue({
      idPost: null,
      comment: ''
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    let comment = new Comment();

    comment.id = 3;
    comment.idPost = this.idPost;
    comment.author = "Jean Dow";
    comment.comment = 'hey';

    this.addComment(comment);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
