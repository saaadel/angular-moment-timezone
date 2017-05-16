import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MomentModule} from "angular2-moment";
import {MomentTimezoneModule} from "../angular-moment-timezone/moment-timezone.module";
import {DemoComponent} from "./demo.component";


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    MomentTimezoneModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}


