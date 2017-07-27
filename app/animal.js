class Animal{
  constructor(name, height){
    this.name = name;
    this.heigth = height;
  }
  hello(){
    console.log(`Hi i'm ${this.name} from the animal kingdom`);
  }
}

export default Animal;
