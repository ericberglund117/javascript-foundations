class Magician {
  constructor(magician) {
    this.name = magician.name
    this.topHat = true || magician.topHat
    magician.topHat === undefined ? this.topHat = true : this.topHat = magician.topHat;
    this.confident = false;
    this.confidence = 0;
    
  }

  incantation = (spell) => {
    return `${spell.toUpperCase()}!`;
  }

  cast = () => {
    this.confidence++
    this.confidence >= 3 ? this.confident = true : this.confident = false;
    if (this.topHat) {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper = () => {
    if (this.confident) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no! Practice more before attempting this trick!'
    }
  }

};

module.exports = Magician; 




// class Magician {
//   constructor(magician){
//     this.name = magician.name;
//     this.topHat = magician.topHat || true;
//     this.confident = false;
//     this.spellCount = 0;
//     if (magician.topHat === undefined){
//       this.topHat = true;
//     } else {
//       this.topHat = magician.topHat
//     };
//     }
//     incantation(spell){
//       return spell.toUpperCase() + "!"
//     }
//     cast(spell){
//       this.confident++
//       if(this.confident >= 3){
//         this.confident = true;
//       }
//       if (this.topHat == true){
//         return "PULL RABBIT FROM TOP HAT"
//       } else{
//         return "PULL DOVE FROM SLEEVE"
//       }
//       }
//     performShowStopper(){
//       if(this.confident === true){
//         return 'WOW! The magician totally just sawed that person in half!';
//       } else{
//         return 'Oh no! Practice more before attempting this trick!';
//       }
//     }
//     }



// module.exports = Magician
