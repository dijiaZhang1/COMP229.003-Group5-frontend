import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../partials/footer.component';
import { HeaderComponent } from '../partials/header.component';

@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [FooterComponent, HeaderComponent]
})
  
export class PartialsModule {}