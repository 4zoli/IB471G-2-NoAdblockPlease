import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../firstpage/firstpage.component';
import {MAT_DIALOG_DATA, MatBottomSheet, MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../../shared/services/auth.service';
import {LinkopenerService} from '../../../shared/services/linkopener.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  public indexForButtons = [1, 2, 3, 4];
  constructor(
    public authService: AuthService,
    public linkOpener: LinkopenerService,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  )  { }
  ngOnInit()  {
    console.log('HELLO BM');
    setTimeout(() => {
      this.openMilfDialog();
    }, 5000);
  }


  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetMenuComponent);
  }

  openMilfDialog(): void {
    this.dialog.open(MilfDialogComponent, {
      width: 'max-content',
    });
  }
}

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottomSheetMenu.html',
})
export class BottomSheetMenuComponent {
  constructor(
    public dialog: MatDialog,
    public authService: AuthService
              ) {}

  openDialog(): void {
    this.dialog.open(WinnerDialogComponent, {
      width: '250px',
    });
  }
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: 'winner-dialog.html',
})
export class WinnerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WinnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public auth: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.auth.SignOut();
  }

}

@Component({
  selector: 'app-milf-dialog',
  templateUrl: 'milf-dialog.html',
})
export class MilfDialogComponent {
  constructor(
    public linkOpener: LinkopenerService
  ) {}
}
