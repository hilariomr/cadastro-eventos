//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

let dataAtual = Date.parse("2021-10-16");
let dataDoEvento = Date.parse("2021-10-17");

console.log("");

if (dataAtual < dataDoEvento) {
    console.log("Cadastro permitido para esta data.")
} else {
    console.log("Cadastro não permitido. Data Inválida!")
}

console.log("");

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

let idade = 19;

if (idade > 18) {
    console.log("Idade permitida para cadastro")
} else {
    console.log("Cadastro não permitido. A idade deve ser maior de 18 anos");
}

console.log("");

//Listar participantes e palestrantes por evento.

let participantes = ["Marcos", " Vânia", " João", " Aline", " Antonio"];
let palestrantes = ["André", " Maria"];

console.log(`Participantes do Evento 1: ${participantes}`);
console.log(`Palestrantes do Evento 1: ${palestrantes}`);

console.log("");

//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter
// excedido o limite.

if (participantes.length < 100) {
    console.log("Cadastro realizado com sucesso.");
} else {
    console.log("Cadastro não permitido. Limite de pessoas excedido!");
}

console.log("");