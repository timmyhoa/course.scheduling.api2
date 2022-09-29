import fetch from "node-fetch";
import { Parser, parseString } from "xml2js";

var Class = {
  code: "",
  className: "",
  crn: "",
  startTime: "",
  stopTime: "",
  teacher: "",
  location: "",
};
const url =
  "https://vsb.mcgill.ca/vsb/getclassdata.jsp?term=202209&course_0_0=COMP-206&t=460&e=45&nouser=0";

async function parser() {
  var response = await fetch(url);
  var xml = await response.text();
  parseString(xml, (err, result) => {
    if (err) {
      console.log("ERROR");
      return;
    }
    var content = result.addcourse.classdata.course;
    Class.className = console.log(content);
  });
}

parser();

// fetch(
//   "https://vsb.mcgill.ca/vsb/getclassdata.jsp?term=202209&course_0_0=COMP-206&t=396&e=34"
// )
//   .then((response) => response.text())
//   .then((str) => parser.parseStringPromise(str))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
