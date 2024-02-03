class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta
    constructor(capacidade) {
        this.#capacidade = capacidade
        this.#quantidade = 0
        this.#aberta = false
    }

get quantidade() {
        return this.#quantidade
    }
    get aberta() {
        return this.#aberta
    }
    get capacidade() {
        return this.#capacidade
    }

    beber() {
        if (this.#aberta) {
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            } 
            if (this.#quantidade - 200 < 0) {
                this.#quantidade = 0
            } else {
                this.#quantidade -= 200
            }
            //
        } else { return "A garrafa está fechada" }
    }
    encher(quantidade) {
        if (this.#aberta) {
            this.#quantidade += quantidade
            if (this.#quantidade > this.#capacidade) {
                this.#quantidade = this.#capacidade
            }
        } else { return "A garrafa está fechada" }
    }
    abrirFechar() {
        if (!this.#aberta) {
            this.#aberta = true
        } else {
            this.#aberta = false
        }
    }

    
}