class Calculadora {
    constructor() {
        this.historico = []
    }
    somar(a, b) {
        let resultado = a + b
        this.historico.push({
            operacao: "soma",
            a: a,
            b: b,
            resultado: resultado
        });
        return resultado
    }
    subtrair(a, b) {
        let resultado = a - b
        this.historico.push({
            operacao: "subtração",
            a: a,
            b: b,
            resultado: resultado
        });
        return resultado
    }
    multiplicar(a, b) {
        let resultado = a * b
        this.historico.push({
            operacao: "multiplicação",
            a: a,
            b: b,
            resultado: resultado
        });
        return resultado
    }
    dividir(a, b) {
        let resultado = a / b
        this.historico.push({
            operacao: "divisão",
            a: a,
            b: b,
            resultado: resultado
        });
        return resultado
    }
    lerHistorico(tipoOP) {
        if (!tipoOP) {
            return this.historico
        }
        return this.historico.filter(operacao => operacao.operacao === tipoOP);
    }
}
let cal = new Calculadora()

console.log(cal.subtrair(1, 1))
console.log(cal.subtrair(1, 1))
console.log(cal.somar(10, 3))
console.log(cal.somar(100, 4))
console.log(cal.somar(200, 5))
console.log(cal.somar(10000, 1))
console.log(cal.lerHistorico("subtração"))
console.log(cal.lerHistorico())

