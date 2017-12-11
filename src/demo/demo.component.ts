import {Component} from "@angular/core";
import * as moment from "moment-timezone";
import {Moment} from "moment-timezone";

@Component({
  selector: "demo-root",
  template: `
    <h1>Demo</h1>
    <div>{{ '2007-03-01T13:00:00Z' }} (raw: TZ - UTC)</div>
    <div>{{ '2007-03-01T13:00:00Z' | amDateFormat }} (formatted: in current TZ, parse in UTC) = 2007-03-01T16:00:00+03:00</div>
    <div>{{ '2007-03-01T13:00:00Z' | amTz:"America/New_York":false | amDateFormat }} (formatted: in America/NY TZ, parse in UTC )
      = 2007-03-01T08:00:00-05:00
    </div>
    <div>{{ '2007-03-01T13:00:00Z' | amTz:"America/New_York":true | amDateFormat }} (formatted: in America/NY TZ, parse in UTC)
      = 2007-03-01T08:00:00-05:00
    </div>
    <hr/>
    <div>{{ '2007-03-01T13:00:00' }} (raw: TZ - Unknown )</div>
    <div>{{ '2007-03-01T13:00:00' | amDateFormat }} (formatted: in current TZ, parse in current TZ) = 2007-03-01T13:00:00+03:00</div>
    <div>{{ '2007-03-01T13:00:00' | amTz:"America/New_York":false | amDateFormat }} (formatted: in America/NY TZ, parse in current TZ)
      = 2007-03-01T05:00:00-05:00
    </div>
    <div>{{ '2007-03-01T13:00:00' | amTz:"America/New_York":true | amDateFormat }} (formatted: in America/NY TZ, parse in America/NY TZ)
      = 2007-03-01T13:00:00-05:00
    </div>
    <hr/>
    <div>{{ currentMoment | amDateFormat }}</div>
    <div>{{ currentMoment | amTz:"America/New_York" | amDateFormat }}</div>
    <div>{{ currentDate | amTz:"America/New_York" | amDateFormat }}</div>
    <div>{{ currentDateISOString | amTz:"America/New_York" | amDateFormat }}</div>
  `,
  styles: []
})
export class DemoComponent {
  public currentMoment: Moment = moment();
  public currentDate: Date = new Date();
  public currentDateISOString: string = new Date().toISOString();
}
