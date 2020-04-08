function metade(valor) {

    // primeiro parâmetro resposta bem sucedida (resolve)
    // segundo parâmetro caso dê algum erro (reject)

    return new Promise(function(resolve, reject) {

        if (valor % 2 > 0) {
            reject("Não é par");
        }

        setTimeout(function() {
            resolve(valor / 2);
        }, 3000);

    });

}

respostaOK = function(valor) {
    console.log(valor);
}

respostaFalha = function(msg) {
    console.log(msg);
}

a = metade(4).then(respostaO).catch(respostaFalha);