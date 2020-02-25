import { Component, OnInit } from '@angular/core';
import { PostService } from '../../app/post.service';
import { Post } from '../post.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostDialog } from './post/post.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {

  posts: Post[] = [];

  selectedCategory : string = 'all';
  
  constructor(public dialog: MatDialog, private _postService: PostService) { }

  getPosts(): void {
    this._postService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

  showDialog() {
    this.dialog.open(PostDialog, {
      width: '550px',
      data: ''
    });
  }

  displayCategory(value: string) {
    this.selectedCategory = value;
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
