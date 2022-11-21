console.log("start SearchForm JS");

 

class SearchForm{
  constructor(AAA) { 
    this.ZZZ = AAA ;
    const CCC = document.createElement("div");
    CCC.setAttribute("class", "test1");
    form.appendChild(CCC);

    console.log("start SearchForm JS");

    let putAsymbol;
    
    function searchButtonfunction() {
      console.log("click in the main button");
      Spinner.style.display = "inline-block";
      console.log("test1");

      removeAllChildNodes(resultsList);  //  function that clear all previus results
      console.log(serchField.value);
    
      URLforSEARCH =
        "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=" +
        serchField.value +
        "&limit=10&exchange=NASDAQ";
      fetch1(URLforSEARCH);
    }
    
    
    DivSearchItems = document.createElement("div");
    DivSearchItems.setAttribute("id", "search-items");
    DivSearchItems.classList.add("input-group");
    DivSearchItems.classList.add("mb-3");
    form.appendChild(DivSearchItems);
    
    class SearchForm {
      constructor(_thSearchForm, _precent, _SYMBOLclass, _PRECENTclass) {
        this.symbol = _thesymbol;
      }
    
      MakeSpinner() {
        Spinner = document.createElement("span");
        Spinner.classList.add("spinner-border");
        Spinner.setAttribute("id", "spinner-border");
        Spinner.setAttribute("role", "status");
        Spinner.setAttribute("aria-hidden", "true");
        Spinner.style.display = "inline-block";
        form.append(Spinner);
      }
    
      MakePrimaryButton() {
        PrimaryButton = document.createElement("button");
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
      }
    
      MakeSerchField() {
        serchField = document.createElement("input");
        serchField.setAttribute("id", "search-field");
        serchField.setAttribute("class", "form-control");
        serchField.setAttribute("type", "text");
        serchField.setAttribute("placeholder", "Search the Nasdaq");
        serchField.setAttribute("aria-label", "Recipient's username");
        serchField.setAttribute("aria-describedby", "basic-addon2");
        serchField.classList.add("input-group");
        DivSearchItems.appendChild(serchField);
      }
    
    
    
    
    }
    
    /////////////
    let serchField = new SearchForm();
    let PrimaryButton = new SearchForm();
    let Spinner = new SearchForm();
    ////////////////
    
    Spinner.MakeSpinner();
    serchField.MakeSerchField();
    PrimaryButton.MakePrimaryButton();
    
    Spinner.style.display = "none";
    console.log("end index code");
    



    

} //end of constructor


    // load(){
    //   const ZZZ = document.createElement("div");
    //   ZZZ.setAttribute("class", "test2");
    //   form.appendChild(ZZZ);
      
    // } ;
  };







  
  // form.load();
    // class SearchForm{ WWWW;BBBBB;
      
    //   constructor(BBBBB){
    //     this.bbb = BBBBB ;
    //     console.log("1");}
       
    //     load() {
    //       console.log("do it jembo");
    //       console.log("2");
       
    //          }
    //    render(){
    //     this.bbb.innerHTML=`<div> 343434343434343434343434343434
    //     343434343434343434343434343434343434343434
    //     343434343434343434343434343434
    //     343434343434343434343434343434343434343434
    //      </div>`; 
    //     console.log("do it ffffffffffffffff");
    //    }
       
    //   };
  
       
    
 
    //   class Pet {
    //     name;
    //     age;
    //     color;
    //     image;
    //     isAdopted = false;
    
    //     constructor(age, name, color) {
    //         this.name = name;
    //         this.age = age;
    //         this.color = color;
    //     }
    
    //     adopt() {
    //         console.log(`The pet ${this.name} was adopted`);
    //         this.isAdopted = true;
    //     }
    
    //     abandon() {
    //         this.isAdopted = false;
    //     }
    
    //     render() {
    //         const liElement = document.createElement('li');
    //         const btnElement = document.createElement('button');
    //         btnElement.innerText = 'Adopt';
    //         btnElement.addEventListener('click', () => {
    //             this.adopt();
    //         });
    //         // liElement.append(`${this.name}, age: ${this.age}`);
    //         liElement.appendChild(btnElement);
    
    //         return liElement;
    //     }
    // }


    