function gerarCodigos() {
    const alphabet = {
        A: 10,
        B: 12,
        C: 13,
        D: 14,
        E: 15,
        F: 16,
        G: 17,
        H: 18,
        I: 19,
        J: 20,
        K: 21,
        L: 23,
        M: 24,
        N: 25,
        O: 26,
        P: 27,
        Q: 28,
        R: 29,
        S: 30,
        T: 31,
        U: 32,
        V: 34,
        W: 35,
        X: 36,
        Y: 37,
        Z: 38,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
    };


    let quantidadeCodigos = document.getElementById("qtdCodigos").value
    let codigos = []

    for (let i = 0; i < quantidadeCodigos; i++) {
        let alg = ''

        for (let j = 0; j < 3; j++) {
            let alphabetAux = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let a = alphabetAux.charAt(Math.floor(Math.random() * alphabetAux.length))
            alg += a
        }

        let lastChars = 'JUZ'
        let b = lastChars.charAt(Math.floor(Math.random() * lastChars.length))
        alg += b

        for (let j = 0; j < 6; j++) {
            let numbers = '0123456789'
            let c = numbers.charAt(Math.floor(Math.random() * numbers.length))
            alg += c
        }
        codigos.push(alg)
    }

    let somaTotal = codigos.map(c => c.split('')
        .map(n => alphabet[n])
        .map((n, i) => n * (2 ** i))
        .reduce((a, b) => a + b)
    )

    let digitoVerificador = somaTotal.map(n => n % 11)

    codigos.map((a, i) => {
        digitoVerificador[i] = digitoVerificador[i] == 10 ? 0 : digitoVerificador[i]
        let r = a + digitoVerificador[i]
        console.log(r)
        document.getElementById("result").innerText += ` ${r} | `
    })
}
