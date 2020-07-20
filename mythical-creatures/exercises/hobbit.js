class Hobbit {
  constructor(name, age){
    this.name = name;
    this.age = age || 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    if(this.name === 'Frodo'){
      this.hasRing = true;
    }
  }
 celebrateBirthday(){
   this.age++
   if(this.age > 32){
     this.adult = true
   }
   if (this.age >= 101){
     this.old = true;
   }
 }
}

module.exports = Hobbit
