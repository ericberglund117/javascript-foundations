class Werewolf{
  constructor(name){
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  transform(){
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    // if(this.human){
    //   this.human = false;
    //   this.wolf = true;
    //   this. hungry = true;
    // } else{
    //   this.human = true;
    //   this.wolf = false;
    // };
  }
    eat(victim) {
      if(this.hungry || this.human){
        this.hungry = false;
        return "I can't eat the victim becaues I'm a human"
    };
  };
};


module.exports = Werewolf
