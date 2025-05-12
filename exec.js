class Animal { // Classe abstrata
  constructor(name) {
        if (this.constructor === Animal) {
        throw new Error("Classe animal não pode ser instanciada diretamente");
        }  
        this.name = name;
    }

    emitirSom() {
        throw new Error("Método emitirSom deve ser implementado por subclasses");
    }
}

class Cachorro extends Animal { // Classe concreta
    emitirSom() {
        console.log(`${this.name} faz: Au Au`);
    }
}

class Gato extends Animal { // Classe concreta
    emitirSom() {
        console.log(`${this.name} faz: Miau`);
    }
}

class Vaca extends Animal { // Classe concreta
    emitirSom() {
        console.log(`${this.name} faz: Muu`);
    }
}

const cachorro = new Cachorro("Banzé");
const gato = new Gato("Garfield");
const vaca = new Vaca("Mimosa");

cachorro.emitirSom(); // Saída: Banzé faz: Au Au
gato.emitirSom(); // Saída: Garfield faz: Miau
vaca.emitirSom(); // Saída: Mimosa faz: Muu
