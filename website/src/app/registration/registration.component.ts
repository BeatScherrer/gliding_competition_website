import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, matDialogAnimations, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register(): void {
    this.openDialog();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog was closed");
    })
  }
}

@Component({
  selector: 'registration-dialog',
  templateUrl: './registration-dialog.html'
})
export class RegistrationDialog {
  constructor(public dialogRef: MatDialogRef<RegistrationDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData)
  {}

  onNoClick(): void {
    this.dialogRef.close();

  }

}
