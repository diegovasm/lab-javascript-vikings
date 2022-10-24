// Soldier
class Soldier {

    constructor(health, strength) {

        this.health = health;
        this.strength = strength;
    }

    attack(){

        return this.strength;
    }

    receiveDamage(damage){

        this.health -= damage;

    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength){

        super(health, strength);

        this.name = name;
    }

    //this class imherits attack function from Soldier class;

    receiveDamage(damage){

        let result = "";
        this.health -= damage;

        if(this.health > 0){

            result = `${this.name} has received ${damage} points of damage`;

        }else{

            result = `${this.name} has died in act of combat`;

        }

        return result
    }

    battleCry(){

        return  "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

  //constructor inherited from Class Soldier

    receiveDamage(damage){

        let result = "";
        this.health -= damage;

        if(this.health > 0){

            result = `A Saxon has received ${damage} points of damage`;

        }else{

            result = "A Saxon has died in combat";

        }

        return result

    }

}

// War
class War {

    constructor(){

        this.vikingArmy = [];
        this.saxonArmy = [];

    }

    addViking(Viking){

        this.vikingArmy.unshift(Viking);

    }

    addSaxon(Saxon){

        this.saxonArmy.unshift(Saxon);

    }

    vikingAttack(){

        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);

        let resultDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if(this.saxonArmy[randomSaxon].health <= 0){

            this.saxonArmy.splice(randomSaxon,1);
            // Pq um delete aqui não funciona ?

        }

        return resultDamage
    }

    saxonAttack(){

        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);

        let resultDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if(this.vikingArmy[randomViking].health <= 0){

            //delete this.vikingArmy[randomViking];
            this.vikingArmy.splice(randomViking,1);
        }

        return resultDamage

    }

    showStatus(){
        
        let result = "";

        if(!this.saxonArmy.length){

            result = `Vikings have won the war of the century!`;

        }else if(!this.vikingArmy.length){

            result = `Saxons have fought for their lives and survived another day...`;

        }else{

            result = `Vikings and Saxons are still in the thick of battle.`;

        }
        return result
    }
}
