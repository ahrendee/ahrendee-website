import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';
import { Company, PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companies: Observable<Company[]>;

  constructor(private dialog: MatDialog,
              private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    // this.companies = this.portfolioService.companies;
    this.companies = this.portfolioService.companies;

    this.portfolioService.load();
  }

  openCompany(company: any) {
    this.dialog.open(PortfolioDialogComponent, {
      data: {company}
    });
  }

  addOne() {
    this.portfolioService.addOne();
  }
}
