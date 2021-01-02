const toJSON = require("../");
const path = require("path");
const { readFile } = require("fs");
const { promisify } = require("util");

const asyncReadFile = promisify(readFile);

function readMail(filename = "atomic-design") {
  return asyncReadFile(
    path.resolve(__dirname, `../__mocks__/${filename}.txt`),
    {
      encoding: "utf8",
    }
  );
}

describe("kindle-email-to-json", () => {
  it("converts export with a note", () => {
    return readMail()
      .then(toJSON)
      .then((data) => {
        expect(data).toMatchSnapshot();
      });
  });

  it("converts export with page data and multiple authors", () => {
    return readMail("machine-platform-crowd")
      .then(toJSON)
      .then((data) => {
        expect(data).toMatchSnapshot();
      });
  });
});
