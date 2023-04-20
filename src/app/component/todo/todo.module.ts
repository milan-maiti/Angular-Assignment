import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MaterialModule } from 'src/app/common/material/material.module';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TodoModule { }
