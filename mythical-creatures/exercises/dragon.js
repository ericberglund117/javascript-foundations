class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eaten = 0
  }
  eat(){
    this.eaten++
    if(this.eaten >= 3){
      this.hungry = false;
    }
    }
}



module.exports = Dragon;
