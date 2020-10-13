import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss']
})
export class PortfolioDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
