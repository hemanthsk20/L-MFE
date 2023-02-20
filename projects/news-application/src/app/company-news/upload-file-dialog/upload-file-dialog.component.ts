import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.scss']
})
export class UploadFileDialogComponent implements OnInit {
  file: boolean;
  link: boolean;
  fileUploadForm: FormGroup;
  fileUploadPending = true;
  constructor(private matdialogref: MatDialogRef<UploadFileDialogComponent>, private fb: FormBuilder,) {
    this.fileUploadForm = this.fb.group({
      link : ['']
    })
   }

  ngOnInit(): void {
    console.log(this.matdialogref)
  }
  onClickFile(){
    this.file = true;
    this.link = false
  }
  onClickLink(){
    this.file = false;
    this.link = true
  }
  onClose() {
    this.matdialogref.close({ event: 'Cancel' });
  }
  onChange(event: any) {
    // this.file = event.target.files;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = event.target.files[0];
        this.fileUploadPending = false;
        console.log(this.file);
      };
    }
  }
}
