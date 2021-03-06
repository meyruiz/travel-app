import { Injectable } from '@angular/core';
import { Comment } from '../app/comment.model';
import { PostService } from './post.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments : Comment[] = [{
    idPost: 1,
    author: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  },
  {
    idPost: 2,
    author: "John Dude",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }]

  constructor(private _postService: PostService) { }

  getCommentsById(id: number): Observable<Comment[]> {
    return of(this.comments.filter(comment => comment.idPost === id));
  }

  addComment(comment: Comment): Observable<Comment[]>  {
    this.comments.push(comment);
    this._postService.addComment(comment.idPost);
    this.getCommentsById(comment.idPost);

    return of(this.comments);
  }
}
