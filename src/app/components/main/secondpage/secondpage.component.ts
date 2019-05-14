import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../firstpage/firstpage.component';
import {MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef, MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../../shared/services/auth.service';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  )  { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef2 = this.dialog.open(DialogOverview2Component, {
      width: '250px',
    });
  }



  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}



@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
    public dialog2: MatDialog
              ) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  openDialog(): void {
    const dialogRef2 = this.dialog2.open(DialogOverview2Component, {
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
