import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

export class MessageTrimmer extends AbstractHandler {
  protected process(record: SystemErrorRecord): SystemErrorRecord {
    if (!record.message) {
      throw new Error("Invalid message");
    }

    return {
      ...record,
      message: record.message.slice(0, 255),
    };
  }
}
