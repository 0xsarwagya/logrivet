import { Colors } from "./colors";

declare module "LogRivet" {
  export interface LogOptions {
    message?: string;
    key?: string;
    value?: string;
    color?: Colors;
  }

  export default class LogRivet {
    readonly show_time: boolean;
    readonly should_store: boolean;
    readonly file: string;

    constructor(show_time: boolean, should_store: boolean);

    info(logOpts: LogOptions): void;
    error(logOpts: LogOptions): void;
    warn(logOpts: LogOptions): void;
    success(logOpts: LogOptions): void;
    debug(logOpts: LogOptions): void;
    log(logOpts: LogOptions): void;
  }
}
