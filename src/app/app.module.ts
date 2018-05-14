import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule, MatButtonModule, MatIconModule,
         MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumDialogComponent } from './album-dialog/album-dialog.component';

const appRoutes: Routes = [
  { path: 'albums', component: AlbumListComponent },
  { path: 'album/:id',      component: AlbumDetailsComponent },
  { path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    PageNotFoundComponent,
    AlbumDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlbumDialogComponent],
})
export class AppModule { }
