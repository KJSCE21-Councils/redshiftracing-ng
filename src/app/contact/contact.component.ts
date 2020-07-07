import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor(private snackBar: MatSnackBar) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
    });
  }

  ngOnInit(): void {
  }

}
