import { Context, PersistentVector, logging } from "near-sdk-as";
import Report from "./models/Report";

const reportsList = new PersistentVector<Report>("Reports");

export function createReport(
  categorie: string,
  objectives: string,
  location: string,
  goal: i32
): void {
  assert(categorie.length > 0, "Name field can not be empty.");
  assert(objectives.length > 0, "Description field can not be empty.");
  assert(location.length > 0, "Location field can not be empty.");
  assert(
    goal > 0,
    "Please select the desire funds (which can not be negative numbers or zero) for this campaing."
  );
  reportsList.push(
    new Report(
      reportsList.length + 1,
      Context.sender,
      categorie,
      objectives,
      location,
      goal
    )
  );
}

export function getReport(id: i32): Report {
  if (!reportsList.containsIndex(id)) {
    throw new Error("Report not found");
  }
  return reportsList[id];
}

export function getReports(): Report[] {
  const result: Report[] = new Array<Report>(reportsList.length);
  for (let i = 0; i < reportsList.length; i++) {
    result[i] = reportsList[i];
  }
  return result;
}

export function donate(reportID: i32, cuantity: i32): Report {
  if (!reportsList.containsIndex(reportID)) {
    throw new Error("report not found");
  }
  if (cuantity < 1) {
    throw new Error("Donation cuantity should be more than 0.");
  }
  let report = reportsList[reportID];
  if (report.remaining === 0) {
    throw new Error("Goal has already been met, thanks for your donations.");
  }
  if (cuantity > report.remaining) {
    throw new Error("Donation cuantity will surpase goal.");
  }
  report.fundsRaised = cuantity + report.fundsRaised;
  report.remaining = report.remaining - cuantity;
  reportsList.replace(reportID, report);
  return report;
}

export function deleteReport(id: i32): void {
  if (!reportsList.containsIndex(id)) {
    logging.log("report not found");
    return;
  }
  let result = "";
  if (<String>reportsList[id].nearAccountID == <String>Context.sender) {
    reportsList.swap_remove(id);
    result = "Report successfully deleted.";
  } else {
    result = "Report can only be deleted by creator.";
  }
  logging.log(result);
}