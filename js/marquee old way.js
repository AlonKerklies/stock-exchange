// Create element:
console.log("start marquee file");

const theTikkerBG = document.createElement("div");
theTikkerBG.setAttribute("class", "theTikkerBG");
document.body.prepend(theTikkerBG);

const Tikker = document.createElement("ul");
theTikkerBG.prepend(Tikker);
Tikker.setAttribute("class", "theTikker");
// Tikker.innerText = "This is a paragraphhhhh.";
//  Tikker.setAttribute("theTikker");
// Append to body:

async function fetchNO2(URL) {
  try {
    const response = await fetch(URL);
    const data2 = await response.json();
    getDataOut2 = data2;
    //   console.log(getDataOut2["0"] );
    //   console.log(getDataOut2.length );
    // ------------ הגבלתי את רשימת הפריטים-    -----
    getDataOut2.length = 28;
    for (let i = 0; i < getDataOut2.length; i++) {
      //   console.log(getDataOut2[i].symbol);

      fetchNO3(
        `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${getDataOut2[i].symbol}`
      );
    }

    return getDataOut2;
  } catch (err) {
    console.error(err);
    return { todos: [] };
  }
}

fetchNO2(
  "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=" +
    "." +
    "&exchange=NASDAQ"
);

async function fetchNO3(URL) {
  try {
    const response = await fetch(URL);
    const data3 = await response.json();
    // console.log("fetchNO2 from URL for DETAILS ", data);
    getDataOut3 = data3;
    // console.log(getDataOut3.profile.changesPercentage);
    // console.log(getDataOut3.symbol);
    TikkerSymbol = document.createElement("li");
    TikkerSymbol.innerText = getDataOut3.symbol;
    TikkerSymbol.setAttribute("class", "TikkerSymbol");
    Tikker.appendChild(TikkerSymbol);

    Tikkerprcent = document.createElement("li");
    Tikkerprcent.innerText = getDataOut3.profile.changesPercentage;
    Tikkerprcent.setAttribute("class", "Tikkerprcent");
    Tikker.appendChild(Tikkerprcent);

    if (`${getDataOut3.profile.changesPercentage}` > 0) {
      console.log(" is positive --> make it green");
      Tikkerprcent.classList.add("positiveValue");
    } else {
      console.log(" is negative --> make it red");
      Tikkerprcent.classList.add("negativeValue");
    }

    return getDataOut3;
  } catch (err) {
    console.error(err);
    return { todos: [] };
  }
}

// fetchNO3(
//     `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${getDataOut[i]["symbol"]}`
//     );

// resultsList.appendChild(ResultLine);
//         ResultLine.prepend(ResultLineIMG);
//         ResultLine.append(ResultStockCancge);
