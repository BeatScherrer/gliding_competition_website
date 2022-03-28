/** Simple logging servie.
 *
 * initially taken from https://www.codemag.com/article/1711021/Logging-in-Angular-Applications
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6,
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;
  publishers: LogPublisher[] = [];

  constructor() {
    this.buildPublishers();
  }

  buildPublishers(): void {
    let consolePublisher: LogPublisher = new LogConsole();

    this.publishers.push(consolePublisher);
  }

  log(msg: any, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;

      for (let publisher of this.publishers) {
        publisher.log(entry);
      }
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    ) {
      ret = true;
    }
    return ret;
  }

  private formatParams(params: any[]): string {
    let ret: string = params.join(',');

    // Is there at least one object in the array?
    if (params.some((p) => typeof p == 'object')) {
      ret = '';

      // Build comma-delimited string
      for (let item of params) {
        ret += JSON.stringify(item) + ',';
      }
    }
    return ret;
  }
}

export class LogEntry {
  // Public Properties
  entryDate: Date = new Date();
  message: string = '';
  level: LogLevel = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate: boolean = true;

  buildLogString(): string {
    let ret: string = '';

    if (this.logWithDate) {
      ret = new Date() + ' - ';
    }

    ret += 'Type: ' + LogLevel[this.level];
    ret += ' - Message: ' + this.message;
    if (this.extraInfo.length) {
      ret += ' - Extra Info: ' + this.formatParams(this.extraInfo);
    }

    return ret;
  }

  private formatParams(params: any[]): string {
    let ret: string = params.join(',');

    // Is there at least one object in the array?
    if (params.some((p) => typeof p == 'object')) {
      ret = '';

      // Build comma-delimited string
      for (let item of params) {
        ret += JSON.stringify(item) + ',';
      }
    }

    return ret;
  }
}

export abstract class LogPublisher {
  location!: string;
  abstract log(record: LogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPublisher {
  log(entry: LogEntry): Observable<boolean> {
    if (entry.level == LogLevel.Debug) {
      console.debug(entry.buildLogString());
    } else if (entry.level == LogLevel.Info) {
      console.info(entry.buildLogString());
    } else if (entry.level == LogLevel.Warn) {
      console.warn(entry.buildLogString());
    } else if (entry.level == LogLevel.Error) {
      console.error(entry.buildLogString());
    } else if (entry.level == LogLevel.Fatal) {
      console.error(entry.buildLogString());
    } else if (entry.level == LogLevel.Off) {
      // do nothing
    } else {
      console.log(entry.buildLogString());
    }

    return of(true);
  }

  clear(): Observable<boolean> {
    console.clear();
    return of(true);
  }
}
