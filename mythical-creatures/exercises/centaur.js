class Centaur {
  constructor(centaur){
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.task = 0;
    this.layingDown = false;
    }
    shoot(){
      this.task++
      this.cranky = this.task >= 3;
      // if(this.task >= 3){
      //   this.cranky = true;
      // }
        // if(this.cranky || this.layindDown){
      // }
      // if(this.layingDown = true){
      //   return 'NO!'
      // }
      return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'
      // return 'Twang!!!'
  }
    run(){
      this.task++
      this.cranky = this.task >= 3;
      // if(this.task >= 3){
      //   this.cranky = true
      // }
      // if(this.cranky){
      //   return 'NO!'
      // }
      return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'
      // return 'Clop clop clop clop!!!'
    }
    sleep(){
      if(this.layingDown){
        this.cranky = false;
      }
      return this.standing || this.layindDown ? 'NO!' : "ZZZZ"
      // if(this.standing){
      //   return 'NO!'
      // }
      // if(this.layingDown){
      //   return 'ZZZZ'
      // }

    }
    layDown(){
      this.standing = false;
      this.layingDown = true;
    }
    standUp(){
      this.standing = true;
      this.layingDown = false;
    }
  }

module.exports = Centaur;
