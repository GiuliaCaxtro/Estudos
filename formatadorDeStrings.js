const entradaUsuario = "   Ola Mundo!   ";
console.log("Entrada original:");
console.log(entradaUsuario);

const entradaLimpa = entradaUsuario.trim();
console.log("Resultado ao remover espaços das duas extremidades:");
console.log(entradaLimpa);

const entradaSemEspacosNoInicio = entradaUsuario.trimStart();
console.log("Apos usar o metodo trimStart(), os espaços iniciais foram removidos:");
console.log(entradaSemEspacosNoInicio);

const entradaSemEspacosNoFim = entradaUsuario.trimEnd();
console.log("Apos usar o metodo trimEnd(), os espaços finais foram removidos:");
console.log(entradaSemEspacosNoFim);

const entradaMaiuscula = entradaLimpa.toUpperCase();
console.log("Resultado ao usar o metodo toUpperCase():");
console.log(entradaMaiuscula);

const entradaMinuscula = entradaLimpa.toLowerCase();
console.log("Resultado ao usar o metodo toLowerCase():");
console.log(entradaMinuscula);

const palavraMinuscula = "camelcase";
const versaoCamelCase = palavraMinuscula.slice(0, 5) + palavraMinuscula[5].toUpperCase() + palavraMinuscula.slice(-3);
console.log("Versao em camel case:");
console.log(versaoCamelCase);
