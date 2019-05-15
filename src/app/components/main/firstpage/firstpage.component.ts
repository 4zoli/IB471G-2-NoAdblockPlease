import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  name: string;
  counter = 0;

  constructor(
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(ToNextLevelDialogComponent, {
      width: '250px',
      data: {name: this.name}
    });
    this.counter ++;
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: 'to-next-level-dialog.html',
})
export class ToNextLevelDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ToNextLevelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onThanksClick(): void {
    this.dialogRef.close();
  }

}
