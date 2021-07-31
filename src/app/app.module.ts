import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MediaComponent } from './media/media.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    PortfolioDialogComponent,
    ContactComponent,
    FooterComponent,
    CvComponent,
    MediaComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
