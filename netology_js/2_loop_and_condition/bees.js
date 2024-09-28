/*
 * Для данного класса мы ничего не будем менять. Здесь он будет
 * таким каким он есть. Для наглядности.
 */
class Bee {
    constructor(type, name, age) {
      this.type = type;
      this.name = name;
      this.age = age;
    }
  
    fly() {
      console.log(`${this.name} летит`);
    }
}
  
class QueenBee extends Bee {
    constructor(name, age) {
      super("королева", name, age);
    }
  
    fly() {
        console.log('Вообще-то благородным не пристало махать крыльями и куда-то летать!');
        console.log('Всё, что нужно мне, приносят по несколько раз на день.');
    }
  
    work() {
      console.log(`Я ${this.name}! Я приумножаю данный рой новыми пчёлами`);
    }
}
  
class DefenderBee extends Bee {
    constructor(name, age) {
      super("страж", name, age);
    }
  
    fly() {
        console.log(`База. База. Я ${this.name}. Совершаю облёт и патрулирование места обитания. Приём.`);
    }
  
    work() {
      console.log(`${this.name}. Мои задачи - охранять данный рой.`);
    }
}
  
class HoneyBee extends Bee {
    constructor(name, age) {
      super("собиратель", name, age);
    }
  
    fly() {
        super.fly();
        if (this.age >= 30) {
            console.log('За водой');
        }
    }
  
    work() {
      console.log(`${this.name} собирает пыльцу`);
    }
}
  
const swarm = [];
const simpleBee = new HoneyBee("Майя", 25);

swarm.push(new QueenBee("Изабелла Великолепная", 127));
swarm.push(new DefenderBee("Охранник", 17));
swarm.push(simpleBee);
swarm.forEach((bee) => {
  bee.fly();
});

simpleBee.age = 32;
simpleBee.fly();