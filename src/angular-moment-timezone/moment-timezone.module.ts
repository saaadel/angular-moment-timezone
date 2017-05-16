import {NgModule} from "@angular/core";
import {TzPipe} from "./tz.pipe";

@NgModule({
  imports: [],
  declarations: [TzPipe],
  exports: [TzPipe]
})
export class MomentTimezoneModule {
}
