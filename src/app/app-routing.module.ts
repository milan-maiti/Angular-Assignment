import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'posts', pathMatch: 'full' },
  {
    path: "posts",
    loadChildren: () => import('./component/post/post.module').then(m => m.PostModule)
  },
  {
    path: "todo",
    loadChildren: () => import('./component/todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
