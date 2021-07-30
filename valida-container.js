
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


let numeroContainer = [
    // Digite o número do container o qual será gerado o dígito verificador
    "AAAA000000",
    "AAAA000001",
    "AAAA000002",
    "AAAA000003",
    "AAAA000004",
    "AAAA000005",
]

let somaTotal = numeroContainer.map(c => c.split('')
    .map(n=> alphabet[n])
    .map((n,i) => n*(2**i))
    .reduce((a,b) => a+b)
)

let digitoVerificador = somaTotal.map(n => n % 11)


numeroContainer.map((a,i) => {
    console.log(a+digitoVerificador[i])
})