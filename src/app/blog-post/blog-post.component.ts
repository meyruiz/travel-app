import { Component, OnInit } from '@angular/core';
import { PostService } from '../../app/post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {

  posts: Post[] = [];

  selectedCategory : string = 'all';
  
  constructor(private _postService: PostService) { }

  getPosts(): void {
    this._postService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

  showDialog() {
    console.log("Show dialog");
  }

  displayCategory(value: string) {
    this.selectedCategory = value;
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
