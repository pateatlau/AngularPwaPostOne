import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-install',
  templateUrl: './ios-install.component.html',
  styleUrls: ['./ios-install.component.scss']
})
export class IosInstallComponent implements OnInit {

  constructor(private snackBarRef:MatSnackBarRef<IosInstallComponent>) { }

  ngOnInit() {
  }

}
