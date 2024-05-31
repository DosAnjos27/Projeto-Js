//saida
console.log("--- Bem Vindo a terra dos Herois ---");
//definindo uma variavel
let heroi = { nome: "Dots144", xp: 15000 };
let xp = "15000";
const mensagem = "Antares Diz: ";
//saida
console.log(mensagem + heroi.nome + " Voce adentrou no reino de Antares");
//concatenando
if (heroi.xp < 1000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Ferro`);
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Bronze`);
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Prata`);
} else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Ouro`);
} else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Platina`);
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Ascendente`);
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Imortal`);
} else if (heroi.xp >= 10001) {
    console.log(`${heroi.nome} classificacao de rank obtida foi Radiante`);
}
//saida
console.log(mensagem + "O Heroi " + heroi.nome + " Atingiu o nivel: " + xp);
console.log (mensagem + "Obrigado Heroi por tonar este reino mais pacifico, as tavernas o aguardam");
console.log(mensagem + "Todos monstros foram mortos por sua espada, Erguiremos um momunto mento na praça central em sua homenagem ");













