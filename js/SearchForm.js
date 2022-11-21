console.log("start SearchForm JS");

class SearchForm {
  constructor(_thSearchForm, _precent, _SYMBOLclass, _PRECENTclass) {
    // this.symbol = _thesymbol;
  }

  onSearch(renderResults) {

    const Spinner = document.createElement("span");
    const DivSearchItems = document.createElement("div");
    DivSearchItems.setAttribute("id", "search-items");
    DivSearchItems.classList.add("input-group");
    DivSearchItems.classList.add("mb-3");
    form.appendChild(DivSearchItems);

    function searchButtonfunction() {
      console.log("click in the main button");
      Spinner.style.display = "inline-block";
      //  function that clear all previus results
      // removeAllChildNodes(resultsList);

      console.log(serchField.value);

      let URLforSEARCH =
        "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=" +
        serchField.value +
        "&limit=10&exchange=NASDAQ";
      console.log(URLforSEARCH);

      fetch1(URLforSEARCH);
    }

    async function fetch1(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
         
        console.log("this is the companies from the form ", data);
        let companies ;
             for (let i = 0; i < data.length; i++) {
    
              companies=(data[i].symbol)
              // console.log(companies)
              renderResults(companies);
              ;
            
            };
            console.log(  "this is the arry of companies from SearchForm" +  companies);

        // const companiesstring = JSON.stringify(companies);
        // console.log( "this is the stringify "+companiesstring);

        
        return companies;

        // return data;
      } catch (err) {
        console.error(err);
        return { todos: [] };
      }
    }

    const serchField = document.createElement("input");
    serchField.setAttribute("id", "search-field");
    serchField.setAttribute("class", "form-control");
    serchField.setAttribute("type", "text");
    serchField.setAttribute("placeholder", "Search the Nasdaq");
    serchField.setAttribute("aria-label", "Recipient's username");
    serchField.setAttribute("aria-describedby", "basic-addon2");
    serchField.classList.add("input-group");
    DivSearchItems.appendChild(serchField);

    const PrimaryButton = document.createElement("button");
    PrimaryButton.addEventListener("click", searchButtonfunction);
    // PrimaryButton.innerText = `go`;
    PrimaryButton.setAttribute("id", "search-button");
    PrimaryButton.setAttribute("type", "button");
    PrimaryButton.classList.add("btn");
    PrimaryButton.classList.add("btn-primary");
    DivSearchItems.appendChild(PrimaryButton);

    const buttonIcon = new Image(16, 16);
    buttonIcon.src = "./images/search.svg";
    PrimaryButton.appendChild(buttonIcon);

    Spinner.classList.add("spinner-border");
    Spinner.setAttribute("id", "spinner-border");
    Spinner.setAttribute("role", "status");
    Spinner.setAttribute("aria-hidden", "true");
    Spinner.style.display = "inline-block";
    Spinner.style.display = "none";
    form.append(Spinner);

    console.log("end of serchform class");


    
  }
}

// let onSearch1000 = new SearchForm();
// onSearch1000.onSearch();
console.log("end index code");
