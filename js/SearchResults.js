console.log("SearchResults start");

class SearchResults {
          constructor(searchFromHtml) {
          this.searchFromHtml = searchFromHtml;}

          renderResults(companies) {

      async function fetchNO2(URL) {
        try {

          console.log(URL);
          const response = await fetch(URL);
          const data2 = await response.json();

          console.log("this is data2 ", data2);
          // console.log(getDataOut2[i]["symbol"]);
          const getDataOut2 = data2;
        
          const resultsList = document.getElementById("results");
          resultsList.setAttribute("class", "resultsList");
          const ResultLine = document.createElement("a");
          results.appendChild(ResultLine);
          
          //נתוני מניה לרשימה
          const ResultStockCancge = document.createElement("span");
          ResultStockCancge.setAttribute("class", "ResultStockCancge");
          ResultStockCancge.textContent = `${getDataOut2.profile.changesPercentage}`;

          // צובע תוצאות אחוזים
          (`${getDataOut2.profile.changesPercentage}` > 0) ? 
          ResultStockCancge.classList.add("positiveValue") : 
          ResultStockCancge.classList.add("negativeValue");
        
          // שורות בתוצאות הרשימה
          ResultLine.href = `company.html?symbol=${getDataOut2.symbol}`;
          ResultLine.setAttribute("class", "ResultLine");
          ResultLine.textContent = `${getDataOut2.profile.companyName}  (${getDataOut2.symbol})`;
          // ResultLine.innerHTML += ` <a href="company.html?symbol=${getDataOut2.symbol}"  class="ResultLine"    >  ${getDataOut2.profile.companyName}  (${getDataOut2.symbol})</a> `;

          // // תמונה קטנה
          const ResultLineIMG = document.createElement("img");
          ResultLineIMG.setAttribute("class", "ResultLineIMG");
          ResultLineIMG.src = `${getDataOut2.profile.image}`;

          resultsList.appendChild(ResultLine);
          ResultLine.prepend(ResultLineIMG);
          ResultLine.append(ResultStockCancge);

          return getDataOut2;
        } catch (err) {
          console.error(err);
          return { todos: [] };
        }
      }
    
      fetchNO2(
        `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companies}`
      );
  











          console.log( "this is SearchResults file " + companies);




  }
}










console.log("SearchResults end");

// renderResults(companies);
//     this.hhhh.innerHTML=`<div> wwwwwwwwwwwwwwwww v </div>`;

//  function renderResults(){
//         console.log(companies);

//       };

// renderResults()

// console.log("start SearchResults file");

// let ResultLine;
// console.log(ResultLine);
// let getDataOut;

// resultsList = document.getElementById("results");
// resultsList.setAttribute("class", "resultsList");
// searchButton = document.getElementById("search-button");

// function insertTheResultsToDom() {
//     Spinner.style.display = "none";

//     console.log("get results from fetch to the innerhtml");
//     console.log("the data length is " + getDataOut.length);
//     // console.log(getDataOut[0]["name"], "(" + getDataOut[0]["symbol"] + ")");

//     //create elments from results
//     for (let i = 0; i < getDataOut.length; i++) {
//       getDataOut[i] + "<br>";

//       ///////////////////////////
//       async function fetchNO2(URL) {
//         try {
//           const response = await fetch(URL);
//           const data2 = await response.json();
//           // console.log("fetchNO2 from URL for DETAILS ", data);
//         const getDataOut2 = data2;
//           ResultLine = document.createElement("a");

//           //נתוני מניה לרשימה
//           ResultStockCancge = document.createElement("p");
//           ResultStockCancge.setAttribute("class", "ResultStockCancge");
//           ResultStockCancge.textContent = `${getDataOut2["profile"]["changesPercentage"]}`;

//           if (`${getDataOut2["profile"]["changesPercentage"]}` > 0) {
//             console.log(" is positive --> make it green");
//             ResultStockCancge.classList.add("positiveValue");
//           } else {
//             console.log(" is negative --> make it red");
//             ResultStockCancge.classList.add("negativeValue");
//           }

//           // שורות בתוצאות הרשימה
//           ResultLine.href = `company.html?symbol=${getDataOut[i]["symbol"]}`;
//           ResultLine.setAttribute("class", "ResultLine");
//           ResultLine.textContent = `${getDataOut[i]["name"]}  (${getDataOut[i]["symbol"]})`;

//           // תמונה קטנה
//           ResultLineIMG = document.createElement("img");
//           ResultLineIMG.setAttribute("class", "ResultLineIMG");
//           ResultLineIMG.src = getDataOut2["profile"]["image"];

//           resultsList.appendChild(ResultLine);
//           ResultLine.prepend(ResultLineIMG);
//           ResultLine.append(ResultStockCancge);

//           return getDataOut2;
//         } catch (err) {
//           console.error(err);
//           return { todos: [] };
//         }
//       }

//       fetchNO2(
//         `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${getDataOut[i]["symbol"]}`
//       );
//     }
//   }

// ------------ alrady use thie in the first form
// async function fetch1(URL) {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log("this is the fetch data ", data);
//       console.log("fetch from URLforSEARCH");
//       getDataOut = data;
//       insertTheResultsToDom(getDataOut);
//       return data;
//     } catch (err) {
//       console.error(err);
//       return { todos: [] };
//     }
//   }
// -------------------------

//   // remove all previus results
// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//     }
//   }
