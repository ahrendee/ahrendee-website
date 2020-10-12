import { Component, OnInit } from '@angular/core';

class Company {
  url: string;
  image: string;
  delay?: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companies: Company[];

  constructor() {
  }

  ngOnInit(): void {
    this.companies = [
      {
        url: 'https://www.eperium.com/',
        image: 'eperium.png'
      },
      {
        url: 'http://www.virtual-affairs.com/',
        image: 'va.png'
      },
      {
        url: 'https://www.prospery.de/',
        image: 'prospery.png'
      },
      {
        url: 'https://www.kadaster.nl/',
        image: 'kadaster.png'
      },
      {
        url: 'https://www.tno.nl/nl/aandachtsgebieden/energietransitie/expertisegroepen/geo-data-it/',
        image: 'tno.jpeg'
      },
      {
        url: 'https://www.ing.nl/personalbanking/index.html',
        image: 'ing.jpeg'
      },
      {
        url: 'http://www.detelefoongids.nl/',
        image: 'dtg.jpeg'
      },
      {
        url: 'http://www.uwv.nl/werkgevers/werknemer-en-ontslag/index.aspx',
        image: 'uwv.png'
      },
      {
        url: 'https://www.klm.com/home/nl/nl',
        image: 'klm.png'
      },
      {
        url: 'http://www.oracle.com/us/products/applications/financial-services/insurance/health-insurance/index.html',
        image: 'oracle.png'
      },
      {
        url: 'http://augustlife.nl',
        image: 'august-life.jpg'
      },
      {
        url: 'http://www.tripolis.com/nl/',
        image: 'tripolis-logo_web.png'
      },
      {
        url: 'https://www.rabobank.nl/particulieren/',
        image: 'rabobank.jpeg'
      }
    ];

    let delay = 100;
    this.companies.forEach(company => {
      company.delay = delay;
      delay += 100;
    });
  }
}
