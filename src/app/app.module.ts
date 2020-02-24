import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoriesComponent } from './blog-post/categories/categories.component';
import { PostComponent, PostDialog } from './blog-post/post/post.component';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCategoryPipe } from './filter-category.pipe';
import { PostDetailComponent } from './blog-post/post-detail/post-detail.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [MatButtonModule, MatButtonToggleModule, MatIconModule, MatDialogModule];

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CategoriesComponent,
    PostComponent,
    PostDetailComponent,
    FilterCategoryPipe,
    PostDetailComponent,
    PostDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ...MaterialComponents,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
