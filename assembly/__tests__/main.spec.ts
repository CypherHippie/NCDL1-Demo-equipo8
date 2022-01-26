import * as contract from "../index";

describe("Create report tests", () => {
  it("Should create a report and not trow error", () => {
    expect(() => {
      contract.createReport(
        "test",
        "For testing purposes.",
        "MX, Mexico.",
        10
      );
    }).not.toThrow();
  });
  it("Should fail with empty categorie", () => {
    expect(() => {
      contract.createReport(
        "",
        "For testing purposes.",
        "MX, Mexico.",
        10
      );
    }).toThrow();
  });
  it("Should fail with empty objectives", () => {
    expect(() => {
      contract.createReport("test", "", "MX, Mexico.", 10);
    }).toThrow();
  });
  it("Should fail with empty location", () => {
    expect(() => {
      contract.createReport("test", "For testing purposes.", "", 10);
    }).toThrow();
  });
  it("Should fail with negative goal", () => {
    expect(() => {
      contract.createReport("test", "For testing purposes.", "", -1);
    }).toThrow();
  });
});

describe("Get Report tests", () => {
  it("Should get a Report and not trow error", () => {
    expect(() => {
      contract.getReport(0);
    }).not.toThrow();
  });
  it("Should fail with negative number", () => {
    expect(() => {
      contract.getReport(-1);
    }).toThrow();
  });
});
