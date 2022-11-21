class Person{

constructor(_name,_age){
    this.name = _name;
    this.age = _age;}

decribe () {
  console.log(`my name: ${this.name} and my age is ${this.age}`);}
}


    class programmer extends Person(_name, _age ,yearOfExperience) {
    super(_name, _age);
    

    code () { console.log(`${this.name} is coding`);
  }

   
} ;

const programmer = [
  new programmer ("jon", 55 , 12),
  new programmer ("don", 35 , 2)
];

(async function (){
const marquee =  new Marquee (document.createElementById('marquee'));
marquee.load();
})