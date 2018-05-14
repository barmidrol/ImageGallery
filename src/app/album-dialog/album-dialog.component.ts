import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.css']
})
export class AlbumDialogComponent implements OnInit {

  form: FormGroup;
  coverUrl: string = '';
  coverToUpload: File = null;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AlbumDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      latitude: 0.0,
      longitude: 0.0,
      cover: '',
    });
  }

  submit(form) {
    this.dialogRef.close({
      title: form.value.title,
      description: form.value.description,
      cover: this.coverToUpload,
      coverPreview: this.coverUrl,
    });
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (evt: any) => {
        this.coverUrl = evt.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      this.coverToUpload = event.target.files.item(0);
    }
  }

}
