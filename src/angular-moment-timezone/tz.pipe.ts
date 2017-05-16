import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment-timezone";

@Pipe({
  name: 'amTz'
})
export class TzPipe implements PipeTransform {

  transform(value: moment.MomentInput, tzdata: string, parseInZone: boolean = false): any {
    if (parseInZone) {
      return moment.tz(value, tzdata);
    }
    return moment(value).tz(tzdata);
  }
}
