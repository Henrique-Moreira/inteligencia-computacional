// HENRIQUE MOREIRA AMORIM
// ALGORITMO DE PERCEPTRON COM 2 ENTRADAS, RESOLVENDO O AND = ENTRADAS E ALVOS BIPOLARES
// formula => ΔW =  α * [T - f(Yent) ] * X

// α = Taxa de aprendizado (0 < α <= 1)
// X = Valores de entrada
// T = Alvo ou saída desejada	

var α = 1
var θ =	0.2

// var x1 = [1, 1, 0, 0]
// var x2 = [1, 0, 1, 0]
// var b = [1, 1, 1, 1]
var entradas = [
    [1, 1, 1],
    [1, -1, 1],
    [-1, 1, 1],
    [-1, -1, 1]
]
var novasEntradas = []
var target = [1, -1, -1, -1]

var p = [
    [0, 0, 0]
]

var variacaoPeso = 0
var epoca = 0

while(variacaoPeso != 4) {

var yent = []
var fyent = []
var ΔW1 = 0
var ΔW2 = 0
var ΔB = 0

var W1 = []
var W2 = []
var B = []
    epoca+=1;
    console.log("----------------------------------------------------")
    console.log("Geração de número " + epoca)
    for(let i = 0; i < entradas.length; i++) {
        // calcula o yent
    
        // yent = 0;
        yent.push(entradas[i][0]*p[0][0] + entradas[i][1]*p[0][1] + entradas[i][2]*p[0][2]);
    
        // calcular o fyent, se o valor de yent[i] for maior = 1
        // se for igual = 0, se for menor do que o limiar de
        // disparo - = -1
        if(yent[i] > θ) {
            fyent.push(1)
        } else if(yent[i] < θ*-1) {
            fyent.push(-1)
        } else {
            fyent.push(0)
        }
    
        // calcular ΔW1, ΔW2 e ΔB
        // ΔW =  α * [T - f(Yent) ] * X
        var coluna = 0;
        ΔW1 = α * (target[i] - fyent[i] ) * entradas[i][coluna]
        ΔW2 = α * (target[i] - fyent[i] ) * entradas[i][coluna+1]
        ΔB = α * (target[i] - fyent[i] ) * entradas[i][coluna+2]
        coluna = 0;
    
        p.push([])
    
        // insere o valor dos novos pesos do array
        p[1].push(ΔW1 + p[0][0])
        p[1].push(ΔW2 + p[0][1])
        p[1].push(ΔB + p[0][2])
    
        // cria um novo array somente com os novos valores de pesos
        novasEntradas = [[...p[1]]]
        
        // insere somente os ultimos pesos encontrados ao array de pesos
        p = novasEntradas
    
        console.log(p)

        if((ΔW1 == 0) && (ΔW2 == 0) && (ΔB == 0)) {
            if(variacaoPeso >= 4) {
                variacaoPeso = 4;
            } else {
                variacaoPeso +=1;
            }     
        } else {
            variacaoPeso = 0;
        }
    }

    console.log("----------------------------------------------------")
}

console.log("////////////////////////////////////////////")
console.log("Pesos finais: " + p)
console.log("Foram necessárias " + epoca + " epoca(s).")
console.log("////////////////////////////////////////////")
// verifico se todos os deltas sao diferente de 0,
// se algum for, for variavel x = 0, senao, x++, 
// para o while quando x=4



