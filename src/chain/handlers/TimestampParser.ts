import { AbstractHandler } from "../AbstractHandler";
import { DataRecord } from "../../models/DataRecord";

export class TimestampParser extends AbstractHandler {
  protected process(record: DataRecord): DataRecord {
    const date = new Date(record.timestamp);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid timestamp");
    }

    return {
      ...record,
      timestamp: date.toISOString(),
    };
  }
}
