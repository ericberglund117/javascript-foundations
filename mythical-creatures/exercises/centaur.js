class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false | centaur.cranky; 
    this.standing = true | centaur.standing;
    this.layingDown = false | centaur.layingDown;
    this.task = 0;
  }
  shoot = () => {
    this.task++
    this.task >= 3 ? this.cranky = true : this.cranky = false;
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
  }

  run = () => {
    this.task++ 
    this.task >= 3 ? this.cranky = true : this.cranky = false;
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    } 
  }

  sleep = () => {
    if(this.standing) {
      return 'NO!'
    } 
    if(this.layingDown) {
      this.cranky = false;
      this.task = 0;
      return 'ZZZZ'
    }
  }

  layDown = () => {
    this.layingDown = true;
    this.standing = false;
  }

  standUp = () => {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion = () => {
    this.cranky ? this.cranky = false : this.cranky = true;
    if(this.layingDown) {
      return 'Not while I\'m laying down!'
    }
  }

}

module.exports = Centaur;






































// class Centaur {
//   constructor(centaur){
//     this.name = centaur.name;
//     this.breed = centaur.type;
//     this.cranky = false;
//     this.standing = true;
//     this.task = 0;
//     this.layingDown = false;
//     this.rested = true;
//     }
//     shoot(){
//       this.task++
//       this.cranky = this.task >= 3;
//       // if(this.task >= 3){
//       //   this.cranky = true;
//       // }
//         // if(this.cranky || this.layindDown){
//       // }
//       // if(this.layingDown = true){
//       //   return 'NO!'
//       // }
//       return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'
//       // return 'Twang!!!'
//   }
//     run(){
//       this.task++
//       this.cranky = this.task >= 3;
//       // if(this.task >= 3){
//       //   this.cranky = true
//       // }
//       // if(this.cranky){
//       //   return 'NO!'
//       // }
//       return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'
//       // return 'Clop clop clop clop!!!'
//     }
//     sleep(){
//       if(this.layingDown){
//         this.cranky = false;
//         this.task = 0;
//       }
//       return this.standing || this.layindDown ? 'NO!' : "ZZZZ"
//       // if(this.standing){
//       //   return 'NO!'
//       // }
//       // if(this.layingDown){
//       //   return 'ZZZZ'
//       // }

//     }
//     layDown(){
//       this.standing = false;
//       this.layingDown = true;
//     }
//     standUp(){
//       this.standing = true;
//       this.layingDown = false;
//     }
//     drinkPotion(){
//       if(this.standing && this.task >= 3){
//         this.cranky = false
//         this.rested = false;
//       }
//       if(this.rested){
//         this.cranky = true
//       }
//       return 'Not while I\'m laying down!'
//     }
//   }

// module.exports = Centaur;
