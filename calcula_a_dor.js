
//a calculadora deve ter historico operacoes, e deve guardar o ultimo resultado
//se b nao for definido, em vez de a+b fazer ultimo resultado + a, o mesmo para as restantes Operacoes
// so deve retornar e funcionar com n inteiros
// :)
class Calculadora {

    constructor() {
        this.historico = []
        this.ultimoResultado = 0
    }

    somar(a, b) {
        if (b === undefined) { // (!b)
            b = a
            a = this.ultimoResultado
            /* this.historico.push(`${this.ultimoResultado} + ${a} = ${(this.ultimoResultado + BigInt(a))}`)
            //this.historico += this.ultimoResultado + b
            this.ultimoResultado = this.ultimoResultado + BigInt(a) */ // n iria funcionar caso n tivessemos 2 argumentos
        }

        this.historico.push(`${a} + ${b} = ${BigInt(a) + BigInt(b)}`)
        this.ultimoResultado = BigInt(a) + BigInt(b)
        return this
    }

    subtrair(a, b) {
        if (b === undefined) {

            b = a
            a = this.ultimoResultado
        }
        this.historico.push(`${a} - ${b} = ${BigInt(a) - BigInt(b)}`)
        this.ultimoResultado = BigInt(a) - BigInt(b)
        return this
    }

    multiplicar(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado

        }
        this.historico.push(`${a} * ${b} = ${BigInt(a) * BigInt(b)}`)
        this.ultimoResultado = BigInt(a) * BigInt(b)
        return this
    }

    dividir(a, b) {
        if (b === undefined) {
            b = a
            a = this.ultimoResultado
        }
        this.historico.push(`${a} / ${b} = ${BigInt(a) / BigInt(b)}`)
        this.ultimoResultado = BigInt(a) / BigInt(b)
        return this
    }

    limparHistorico() {
        this.historico = []
        this.ultimoResultado = 0
        return this
    }

    obterResultado() {
        return this.ultimoResultado
    }

    toJSON() {
        return {
            "historico": this.historico,
            "ultimoResultado": String(this.ultimoResultado)
        }
    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa"
        }
        return `=== Histórico da Calculadora ===
${this.historico.map((elemento, indice) => `${indice + 1}. ${elemento}`).join('\n')}
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.ultimoResultado}`
    }
}

let cal = new Calculadora

console.log(cal.subtrair(1, 1))
console.log(cal.somar(10))
console.log(cal.somar(100))
console.log(cal.somar(200))
console.log(cal.somar(10000, 1))
console.log(cal.toString())
console.log(cal.limparHistorico())
console.log(cal.toString())


