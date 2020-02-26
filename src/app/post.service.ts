import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private idCounter = 3;

  posts: Post[] = [{
    id: 0,
    title: "At the beach in winter",
    comments: 0,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Travel",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus.",
    publishedAt: "01/17/20"
  }, {
    id: 1,
    title: "At the beach in winter",
    comments: 3,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Lifestyle",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus.",
    publishedAt: "01/17/20"
  }, {
    id: 2,
    title: "At the beach in winter",
    comments: 1,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Business",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus.",
    publishedAt: "01/17/20"
  }
];

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(id: number): Observable<Post> {
    return of(this.posts[id]);
  }

  addNewPost(post: Post): Observable<Post[]> {
    post.id = this.idCounter;
    post.comments = 0;
    this.posts.push(post);

    this.idCounter++;

    return of(this.posts);
  }

  editPostById(post: Post): Observable<Post> {
    let id = post.id;
    this.posts[id].title = post.title;
    this.posts[id].image = post.image;
    this.posts[id].category = post.category;
    this.posts[id].shortDescription = post.shortDescription;

    return of(this.posts[id]);
  }

  erasePost(id: number): Observable<Post[]> {
    this.posts.forEach((post, index) => {
      if (post.id === id) {
        this.posts.splice(index, 1);
      }
    });

    return of(this.posts);
  }

  addComment(id: number): Observable<Post[]> {
    this.posts.forEach((post, index) => {
      if (post.id === id) {
        this.posts[index].comments++;
      }
    });
    
    return of(this.posts);
  }
}
