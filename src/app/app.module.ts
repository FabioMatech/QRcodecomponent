import { PaisesdacopaService } from './paisesdacopa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesdacopaComponent } from './paisesdacopa/paisesdacopa.component';


@NgModule({
  declarations: [
    AppComponent,
    PaisesdacopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, PaisesdacopaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
