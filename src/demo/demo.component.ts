import {Component} from "@angular/core";
import * as moment from "moment-timezone";
import {Moment} from "moment-timezone";

@Component({
  selector: 'demo-root',
  template: `
    <h1>Demo</h1>
    <div>{{ currentMoment | amDateFormat }}</div>
    <div>{{ currentMoment2 | amTz:"America/New_York" | amDateFormat }}</div>
    <div>{{ currentDate | amTz:"America/New_York" | amDateFormat }}</div>
    <div>{{ currentDateISOString | amTz:"America/New_York" | amDateFormat }}</div>
  `,
  styles: ['']
})
export class DemoComponent {
  public currentMoment: Moment = moment();
  public currentMoment2: Moment = moment();
  public currentDate: Date = new Date();
  public currentDateISOString: string = new Date().toISOString();
}
