import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component'
import { Album } from './album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Array<Album> = [];
  albumDialogRef: MatDialogRef<AlbumDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addAlbum(albumData: Album) {
    this.albums.push(albumData);
  }

  openAddAlbumDialog(): void {
    this.albumDialogRef = this.dialog.open(AlbumDialogComponent);

    this.albumDialogRef
      .afterClosed()
      .subscribe(albumData => this.addAlbum(albumData));
  }
}
