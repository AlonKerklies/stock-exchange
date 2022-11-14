// custom server for communicating with the API
//https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com
//   endpoint like this: https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=some_api
//  look like this:
// https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/profile/AAPL

//test field
//document.getElementsByClassName("spinner-border").display = "none";
//TheSpinnerBorder.style.display = "none";
//TheSpinnerBorder.style.visibility = "visible"

// var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);

// The search Spinner inside the button
TheSpinnerBorder = document.getElementById("spinner-border");
TheSpinnerBorder.style.display = "none";
// The search icon inside the button
buttonIcon = document.getElementById("button-icon");

// testItem = document.getElementById("test-item");
// testItem.innerHTML = "  changed!";
// testItem.append;

// const link = document.createElement("a");
// link.id = "someLink"; //give it an ID!
// link.href = "https://example.com"; // Your URL

//end of test field

let data;
let getDataOut;

//this is the search-field
searchField = document.getElementById("search-field");

//this is the Results list
resultsList = document.getElementById("results-List");
resultsList.setAttribute("class", "resultsList");

//this is the main serch button
searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchButtonfunction);

function searchButtonfunction() {
  console.log("click in the main button");
  //  remove the button icon
  buttonIcon.style.display = "none";
  //  display the Spinner
  TheSpinnerBorder.style.display = "inline-block";
  // call the function to remove all previus results
  removeAllChildNodes(resultsList);

  console.log(searchField.value);
  URL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=" +
    searchField.value +
    "&limit=10&exchange=NASDAQ";
  fetch1(URL);
}

// remove all previus results
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let ResultLine;

function insertTheResultsToDom() {
  console.log("get results from fetch to the innerhtml");
  console.log("the data length is " + getDataOut.length);
  // console.log(getDataOut[0]["name"], "(" + getDataOut[0]["symbol"] + ")");

  //dont display the Spinner
  TheSpinnerBorder.style.display = "none";
  // display the button Icon
  buttonIcon.style.display = "inline-block";

  //create elments from results
  for (let i = 0; i < getDataOut.length; i++) {
    getDataOut[i] + "<br>";

    // var a = document.createElement('a');
    // var linkText = document.createTextNode("my title text");
    // a.appendChild(linkText);
    // a.title = "my title text";
    // a.href = "http://example.com";
    // document.body.appendChild(a);

    // console.log(getDataOut[i]);
    //ResultLine = document.createElement("a");
    // hr = document.createElement("hr");
    // resultsList.appendChild(hr);
    ResultLine = document.createElement("a");
    ResultLine.href = "http://www." + getDataOut[i]["name"] + ".com";
    ResultLine.setAttribute("class", "ResultLine");
    // ResultLine.style.display = "inline-block";
    resultsList.appendChild(ResultLine);
    ResultLine.textContent = `${getDataOut[i]["name"]}  (${getDataOut[i]["symbol"]})`;
  }
}

let URL =
  "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ";

// --- old fetch --------------
// async function fetch1(giveMeURL) {
//   fetch(giveMeURL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("this is the fetch data ", data);
//       console.log(data[0]);
//       return data;
//     })
//     .catch((err) => {
//       // Will come here if there is an error in one of the promises
//       console.log("fetch Error");
//     });
// }

async function fetch1(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("this is the fetch data ", data);
    // console.log(data);
    // console.log(data[0]);
    getDataOut = data;
    insertTheResultsToDom(getDataOut);
    return data;
  } catch (err) {
    console.error(err);
    return { todos: [] };
  }
}
// fetch1(URL).then((todos) => {
//   console.log(todos);
// });

console.log("end of code2");
