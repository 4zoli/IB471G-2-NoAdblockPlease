import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../firstpage/firstpage.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  )  { }


  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef2 = this.dialog.open(DialogOverview2Component, {
      width: '250px',
    });
  }
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverview2Component {

  constructor(
    public dialogRef2: MatDialogRef<DialogOverview2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public auth: AuthService) {}

  onNoClick(): void {
    this.dialogRef2.close();
    this.auth.SignOut();
  }

}
