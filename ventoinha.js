class Ventoinha {
    #ligada
    #intensidade

    constructor() {
        this.#ligada = false;
        this.#intensidade = 5;
    }

    aumentarIntensidade() {
        if (this.#intensidade < 10) {
            this.#intensidade++;
        }
    }

    diminuirIntensidade() {
        if (this.#intensidade > 1) {
            this.#intensidade--;
        }
    }

    ligarDesligar() {
        this.#ligada = !this.#ligada;
    }

    get ligada() {
        return this.#ligada;
    }

    get intensidade() {
        return this.#intensidade;
    }
}