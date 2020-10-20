import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';

class Company {
  title: string;
  text: string;
  url: string;
  image: string;
  site: string;
  delay?: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companies: Company[];

  constructor(private dialog: MatDialog) {
  }

  openCompany(company: any) {
    this.dialog.open(PortfolioDialogComponent, {
      data: {company}
    });
  }

  ngOnInit(): void {
    this.companies = [
      {
        title: 'Eperium Business Solutions',
        text: '<strong>Intershop / Enfinity Suite 6</strong> e-commerce / e-procurement implementations.',
        url: 'https://www.wundermanthompsoncommerce.com/en/',
        image: 'eperium.png',
        site: 'site_wunderman.png'
      },
      {
        title: 'Virtual Affairs',
        text: 'Various front-end project including Prospery.de',
        url: 'http://www.virtual-affairs.com/',
        image: 'va.png',
        site: 'site_virtualaffairs.png'
      },
      {
        title: 'Rabobank',
        text: 'Payments & Cards front-end development including implementation of Apple Pay',
        url: 'https://www.rabobank.nl/particulieren/',
        image: 'rabobank.jpeg',
        site: 'site_rabobank.png'
      },
      {
        title: 'Kadaster',
        text: 'Front-end project for new registration application',
        url: 'https://www.kadaster.nl/',
        image: 'kadaster.png',
        site: 'site_kadaster.png'
      },
      {
        title: 'TNO - GD & IT',
        text: 'Java microservices for registration of Registration objects in the BRO: <strong>Basis Registratie Ondergrond</strong>',
        url: 'https://www.tno.nl/nl/aandachtsgebieden/energietransitie/expertisegroepen/geo-data-it/',
        image: 'tno.jpeg',
        site: 'site_tno.png'
      },
      {
        title: 'ING',
        text: 'Savings front-end with Polymer and AngularJS',
        url: 'https://www.ing.nl/personalbanking/index.html',
        image: 'ing.jpeg',
        site: 'site_ing.png'
      },
      {
        title: 'DTG',
        text: 'Digital telefoongids',
        url: 'http://www.detelefoongids.nl/',
        image: 'dtg.jpeg',
        site: 'site_dtg.png'
      },
      {
        title: 'UWV',
        text: 'Digitalization of dismissal process',
        url: 'http://www.uwv.nl/werkgevers/werknemer-en-ontslag/index.aspx',
        image: 'uwv.png',
        site: 'site_uwv.png'
      },
      {
        title: 'KLM',
        text: 'Electronic Booking Tool & Search',
        url: 'https://www.klm.com/home/nl/nl',
        image: 'klm.png',
        site: 'site_klm.png'
      },
      {
        title: 'Oracle',
        text: 'Selfservice health insurance application',
        url: 'http://www.oracle.com/us/products/applications/financial-services/insurance/health-insurance/index.html',
        image: 'oracle.png',
        site: 'site_oracle.png'
      },
      {
        title: 'August Life',
        text: 'Web suite for August Life - melodic progrock band. Including webshop with Paypal and iDeal payments.',
        url: 'http://augustlife.nl',
        image: 'august-life.jpg',
        site: 'site_augustlife.png'
      },
      {
        title: 'Tripolis Solutions',
        text: 'Email marketing',
        url: 'http://www.tripolis.com/nl/',
        image: 'tripolis-logo_web.png',
        site: 'site_tripolis.png'
      },
      {
        title: 'ABN AMRO - Prospery.de',
        text: 'Wealth management for the German market (no longer available)',
        url: '',
        image: 'prospery.png',
        site: 'site_prospery.png'
      }
    ];

    let delay = 100;
    this.companies.forEach(company => {
      company.delay = delay;
      delay += 100;
    });
  }
}
