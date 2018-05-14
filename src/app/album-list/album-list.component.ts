import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums = [
    {title: 'One'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
  ];

  albumDialogRef: MatDialogRef<AlbumDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddAlbumDialog(): void {
    this.albumDialogRef = this.dialog.open(AlbumDialogComponent);
  }
}
