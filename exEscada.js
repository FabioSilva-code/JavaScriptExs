function escadaComCardinais(n) {
    let escada = "";
    for (let linha = 1; linha <= n; linha++) {
        for (let espaco = 1; espaco <= n - linha; espaco++) {
            escada += " ";
        }
        for (let hash = 1; hash <= linha; hash++) {
            escada += "#";
        }
      
        escada += "\n";
    }
    console.log(escada);
}

escadaComCardinais(6);







    /* 
        for (let espaco = 1; espaco <= n - linha; espaco++) {
            escada += " ";
        }
        for (let hash = 1; hash <= linha; hash++) {
            escada += "#";
        }
        // Adiciona uma quebra de linha para passar para a próxima linha da escada
        escada += "\n";
    }
    console.log(escada);
}

escadaComCardinais(6); */