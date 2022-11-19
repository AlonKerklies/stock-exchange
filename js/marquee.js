console.log("start marquee JS");

const theTikkerBG = document.createElement("div");
theTikkerBG.setAttribute("class", "theTikkerBG");
// document.body.prepend(theTikkerBG);
marquee.appendChild(theTikkerBG);

const Tikker = document.createElement("ul");
theTikkerBG.prepend(Tikker);
Tikker.setAttribute("class", "theTikker");

async function fetchNO2(URL) {
  try {
    const response = await fetch(URL);
    const data2 = await response.json();
    getDataOut2 = data2;
    //   console.log(getDataOut2.length );     //   console.log(getDataOut2["0"] );
    //   console.log(getDataOut2[i].symbol);
    getDataOut2.length = 28; //  הגבלתי את רשימת הפריטים-
    for (let i = 0; i < getDataOut2.length; i++) {
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
    getDataOut3 = data3;

    //////////////////////////////////////////////////////////////////////////////////////

    let SYMBOLElementToTikker;
    let PRECENTementToTikker;

    class makeElementToTikker {
      constructor(_thesymbol, _precent, _SYMBOLclass, _PRECENTclass) {
        this.symbol = _thesymbol;
        this.precent = _precent;
        this.SYMBOLclass = _SYMBOLclass;
        this.PRECENTclass = _PRECENTclass;
      }

      MakeIt() {
        SYMBOLElementToTikker = document.createElement("li");
        SYMBOLElementToTikker.innerText = `${this.symbol}`;
        SYMBOLElementToTikker.classList.add(`${this.SYMBOLclass}`);
        PRECENTementToTikker = document.createElement("li");
        PRECENTementToTikker.innerText = `${this.precent}`;
        PRECENTementToTikker.classList.add(`${this.PRECENTclass}`);
        Tikker.appendChild(PRECENTementToTikker);
        Tikker.appendChild(SYMBOLElementToTikker);
      }

      MinusPlusCOLORS() {
        `${this.precent}` < 0
          ? PRECENTementToTikker.classList.add("negativeValue")
          : PRECENTementToTikker.classList.add("positiveValue");
      }
    }

    let theTikkerSymbol2 = new makeElementToTikker(
      getDataOut3.symbol,
      getDataOut3.profile.changesPercentage,
      ("class", "TikkerSymbol"),
      ("class", "Tikkerprcent")
    );
    theTikkerSymbol2.MakeIt();
    theTikkerSymbol2.MinusPlusCOLORS();
    ////////////////////////////////////////////////////////

    return getDataOut3;
  } catch (err) {
    console.error(err);
    return { todos: [] };
  }
}
