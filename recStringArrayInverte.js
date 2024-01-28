    function inverteArray(array){
        function inverteArray(array){
            //duas funcoes uma que inverte uma string outra que faz map com nova essa nova funçao
                const res = array.map((elemento)=>inverteString(elemento))
                return res 
            }
        
        
            function inverteString(string){  // irá receber a string, string esta que será o elemento do map
            if(string.length === 0){    // iremos sair do ciclo, recursao
                return ""
            }
            return string[string.length - 1] + inverteString(string.slice(0, string.length - 1))  // faz a recursao 
            }
        
        
        
    }