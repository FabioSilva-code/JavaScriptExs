class Mapa {
    #lista;

    constructor() {
        this.#lista = [];
    }
    set(chave, valor) {
        let encontrado = false;
        for (let i = 0; i < this.#lista.length; i++) {
            if (this.#lista[i].chave === chave) {
                this.#lista[i].valor = valor;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            this.#lista.push(new ChaveValor(chave, valor));
        }
    }
    has(chave) {
        for (let i = 0; i < this.#lista.length; i++) {
            if (this.#lista[i].chave === chave) {
                return true;
            }
        }
        return false;
    }
    get(chave) {
        for (let i = 0; i < this.#lista.length; i++) {
            if (this.#lista[i].chave === chave) {
                return this.#lista[i].valor;
            }
        }
        return undefined;
    }
    clear() {
        this.#lista = [];
    }
    delete(chave) {
        for (let i = 0; i < this.#lista.length; i++) {
            if (this.#lista[i].chave === chave) {
                this.#lista.splice(i, 1);
                break;
            }
        }
    }
}
class ChaveValor {
    constructor(chave, valor) {
        this.chave = chave;
        this.valor = valor;
    }
}