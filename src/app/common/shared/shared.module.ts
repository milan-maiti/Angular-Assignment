import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from 'src/app/pipe/truncate.pipe';
import { PaginationComponent } from '../pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TruncatePipe, PaginationComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    // BrowserAnimationsModule,
    // BrowserModule
  ],
  exports: [
    TruncatePipe,
    PaginationComponent
  ]
})
export class SharedModule { }
