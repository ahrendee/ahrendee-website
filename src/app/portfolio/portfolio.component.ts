import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';
import { Company } from './model/portfolio.model';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private dialog: MatDialog,
              private service: PortfolioService) {
  }

  openCompany(company: any) {
    this.dialog.open(PortfolioDialogComponent, {
      data: {company}
    });
  }

  ngOnInit(): void {
    this.companies$ = this.service.getCompanies().pipe(
      map(companies => {
        let delay = 100;
        companies.forEach(company => {
          company.delay = delay;
          delay += 100;
        });
        return companies;
      })
    );
  }
}
