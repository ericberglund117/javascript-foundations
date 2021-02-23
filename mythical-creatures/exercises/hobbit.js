class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    this.name === 'Frodo' ? this.hasRing = true : this.hasRing = false;
  }
  
  celebrateBirthday = () => {
    this.age++
    this.age <= 32 ? this.adult = false : this.adult = true;
    this.age >= 101 ? this.old = true : this.old = false;
  }
}

module.exports = Hobbit;




// class Hobbit {
//   constructor(name, age){
//     this.name = name;
//     this.age = age || 0;
//     this.adult = false;
//     this.old = false;
//     this.hasRing = false;
//     if(this.name === 'Frodo'){
//       this.hasRing = true;
//     }
//   }
//  celebrateBirthday(){
//    this.age++
//    if(this.age > 32){
//      this.adult = true
//    }
//    if (this.age >= 101){
//      this.old = true;
//    }
//  }
// }

// module.exports = Hobbit
