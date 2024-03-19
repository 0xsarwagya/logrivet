# LogRivet

LogRivet is a lightweight TypeScript logging utility designed to streamline logging tasks in your applications. It offers flexible configuration options, supports different log levels, and provides color-coded output for improved readability.

## Installation

You can install LogRivet via npm:

```bash
npm install log-rivet
```

## Usage

### Importing LogRivet

```typescript
import LogRivet from "log-rivet";
```

### Creating a Logger Instance

To create a logger instance, initialize a new `LogRivet` object with the desired configuration options:

```typescript
const logger = new LogRivet(true, true);
```

The first parameter (`show_time`) specifies whether to include timestamps in log messages, and the second parameter (`should_store`) determines whether to store logs in a file.

### Logging Messages

LogRivet provides methods for logging messages at different levels:

```typescript
// Logging an informational message
logger.info({ message: "Application started successfully." });

// Logging an error message
logger.error({
  message: "Failed to process request.",
  key: "Error code",
  value: "500",
});

// Logging a warning message
logger.warn({ message: "Deprecated function used." });

// Logging a success message
logger.success({ message: "Data saved successfully." });

// Logging a debug message
logger.debug({ message: "Debugging information." });
```

Each log method accepts an object with optional properties `message`, `key`, `value`, and `color`. You can customize log messages based on your requirements.

### Customizing Log Colors

You can customize the color of log messages by specifying the `color` property:

```typescript
logger.log({ message: "Custom message with color.", color: Colors.Magenta });
```

### Storing Logs in a File

If the `should_store` parameter is set to `true` during initialization, logs will be stored in a file named `log_rivet.log`. Make sure the file is located in the same directory as your script.

### Example

```typescript
import LogRivet, { Colors } from "log-rivet";

const logger = new LogRivet(true, true);

logger.info({ message: "Starting application..." });
logger.debug({ message: "Debugging information.", color: Colors.BrightBlack });
logger.error({
  message: "Failed to process request.",
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```