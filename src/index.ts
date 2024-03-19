import Colors from "./colors";
import { LEVEL } from "./types";

class LogRivet {
  readonly show_time: boolean;
  readonly should_store: boolean;
  // file should be in the same directory as the script
  readonly file = "log_rivet.log";

  constructor(show_time: boolean, should_store: boolean) {
    this.show_time = show_time;
    this.should_store = should_store;
  }

  private format_message(
    level: LEVEL,
    message?: string,
    key?: string,
    value?: string
  ): string {
    // only message or key and value can be passed
    if (message && key && value) {
      throw new Error("Only message or key and value can be passed");
    }

    let formatted_message = `- [${level.toUpperCase()}] `;
    if (this.show_time) {
      formatted_message += `(${new Date().toISOString()})` + " ";
    }

    if (message) {
      formatted_message += message;
    } else {
      formatted_message += key + ": " + value;
    }

    return formatted_message;
  }

  private store(formatted_message: string) {
    const fs = require("fs");
    fs.appendFileSync(this.file, formatted_message + "\n" + "\n");
  }

  info(logOpts: { message?: string; key?: string; value?: string }) {
    const formatted_message = this.format_message(
      "info",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(Colors.Cyan, formatted_message, Colors.Reset);
  }

  error(logOpts: { message?: string; key?: string; value?: string }) {
    const formatted_message = this.format_message(
      "error",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(Colors.Red, formatted_message, Colors.Reset);
  }

  warn(logOpts: { message?: string; key?: string; value?: string }) {
    const formatted_message = this.format_message(
      "warn",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(Colors.Yellow, formatted_message, Colors.Reset);
  }

  success(logOpts: { message?: string; key?: string; value?: string }) {
    const formatted_message = this.format_message(
      "success",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(Colors.Green, formatted_message, Colors.Reset);
  }

  debug(logOpts: { message?: string; key?: string; value?: string }) {
    const formatted_message = this.format_message(
      "debug",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(Colors.BrightBlack, formatted_message, Colors.Reset);
  }

  log(logOpts: {
    message?: string;
    key?: string;
    value?: string;
    color?: Colors;
  }) {
    const formatted_message = this.format_message(
      "info",
      logOpts.message,
      logOpts.key,
      logOpts.value
    );

    if (this.should_store) {
      this.store(formatted_message);
    }

    console.log(logOpts.color, formatted_message, Colors.Reset);
  }
}

export default LogRivet;
