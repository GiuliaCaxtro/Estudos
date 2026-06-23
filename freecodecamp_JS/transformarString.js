const stringOriginal = "Eu amo gatos.";
console.log("String original:");
console.log(stringOriginal);

const stringSubstituida = stringOriginal.replace("gatos", "cachorros");
console.log("Após usar o método replace():");
console.log(stringSubstituida);

const fraseExemplo = "Eu amo gatos e gatos são tão divertidos!";
console.log("Frase original:");
console.log(fraseExemplo);

//const fraseSoComCachorros = fraseExemplo.replace("gatos", "cachorros");
//console.log("Substituindo todas as ocorrências de gatos por cachorros:");
//console.log(fraseSoComCachorros);

const fraseSoComCachorros = fraseExemplo.replaceAll("gatos", "cachorros");
console.log("Substituindo todas as ocorrências de gatos por cachorros:");
console.log(fraseSoComCachorros);

const fraseAprendizado = "Eu amo aprender!";
console.log("Frase de aprendizado original:");
console.log(fraseAprendizado);

const amorRepetido = "amo ".repeat(3).trimEnd();
console.log(amorRepetido);

const novaFrase = `Eu ${amorRepetido} aprender.`;
console.log(novaFrase);