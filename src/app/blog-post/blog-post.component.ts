import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {

  posts = [{
    id: 1,
    title: "At the beach in winter",
    comments: 0,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Travel",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }, {
    id: 2,
    title: "At the beach in winter",
    comments: 0,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Lifestyle",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }, {
    id: 3,
    title: "At the beach in winter",
    comments: 0,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Business",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }
];

  selectedCategory : string = 'all';
  
  constructor() { }

  ngOnInit(): void {

  }

  showDialog() {
    console.log("Show dialog");
  }

  displayCategory(value) {
    this.selectedCategory = value;
  }
}
