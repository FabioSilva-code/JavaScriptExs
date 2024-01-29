
/* Cria a classe INTEIRO que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for. */

class Inteiro {
    #valor
    constructor(valor){
        this.#valor = isNaN(valor) ? 0 : Math.floor(valor);
    }
    get valor(){
        return this.#valor
    }
}