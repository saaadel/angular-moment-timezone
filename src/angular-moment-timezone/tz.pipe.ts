import {Pipe, PipeTransform} from "@angular/core";
import * as momentFromTz from "moment-timezone";
import * as moment from "moment";

@Pipe({
  name: "amTz"
})
export class TzPipe implements PipeTransform {

  /**
   * Parse or Convert moment value for selected TZData. <p/>
   * Examples:
   * <ul>
   * <li>{{ '2007-03-01T13:00:00Z' }} (raw: TZ - UTC)</li>
   * <li>{{ '2007-03-01T13:00:00Z' | amDateFormat }} (formatted: in current TZ, parse in UTC) = 2007-03-01T16:00:00+03:00</li>
   * <li>{{ '2007-03-01T13:00:00Z' | amTz:"America/New_York":false | amDateFormat }} (formatted: in America/NY TZ, parse in UTC )
   *      = 2007-03-01T08:00:00-05:00</li>
   * <li>{{ '2007-03-01T13:00:00Z' | amTz:"America/New_York":true | amDateFormat }} (formatted: in America/NY TZ, parse in UTC)
   *      = 2007-03-01T08:00:00-05:00</li>
   * <li>----</li>
   * <li>{{ '2007-03-01T13:00:00' }} (raw: TZ - Unknown )</li>
   * <li>{{ '2007-03-01T13:00:00' | amDateFormat }} (formatted: in current TZ, parse in current TZ) = 2007-03-01T13:00:00+03:00</li>
   * <li>{{ '2007-03-01T13:00:00' | amTz:"America/New_York":false | amDateFormat }} (formatted: in America/NY TZ, parse in current TZ)
   *      = 2007-03-01T05:00:00-05:00</li>
   * <li>{{ '2007-03-01T13:00:00' | amTz:"America/New_York":true | amDateFormat }} (formatted: in America/NY TZ, parse in America/NY TZ)
   *      = 2007-03-01T13:00:00-05:00</li>
   * </ul>
   * @param {moment.MomentInput} value date/time/timestamp value - can be with TimeZone id or shift, or without it. <p/>
   *    See <a href="https://en.wikipedia.org/wiki/ISO_8601">wikipedia article</a> for most usable string formats. <p/>
   *    Example: <p/>
   *    - 2007-03-01T13:00:00Z - With TimeZone info ('Z' = UTC); <p/>
   *    - 2007-03-01T13:00:00 - Without TimeZone info. <p/>
   * @param {string} tzdata TZData value. <p/>
   *                        See <a href="https://en.wikipedia.org/wiki/Tz_database#Examples">wikipedia examples</a> <p/>
   * @param {boolean} parseInZone <p/>
   *                              If TRUE - parse value (without TZ id or shift) in defined TZData (Parse mode). <p/>
   *                              If FALSE - convert value (without TZ id or shift) to defined TZData (Conversion mode), and parse
   *                              it in current TZ. <p/>
   *                              NOTE: If moment value has TZ id or shift part - Parse mode will be used and "parseInZone"
   *                              will be ignored. <p/>
   * @returns {any} new moment value for defined TZData
   */
  transform(value: moment.MomentInput, tzdata: string, parseInZone: boolean = false): any {
    if (parseInZone) {
      return momentFromTz.tz(value, tzdata);
    }
    return moment(value).tz(tzdata);
  }
}
