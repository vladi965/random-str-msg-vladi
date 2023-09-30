const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];
//Tenemos una función llamada funnyCommit la cual nos va a permitir mostrar este mensaje
//de la lista, este caso de forma aleatoria, mostrando solo uno de ellos.
const funnyCommit = () => {
//Aqui tenemos una constante llamada message la cual utiliza el array que tenemos y le
//pasamos una estructura que en este caso seria un algoritmo para encontrar un elemento dentro del array
//y extraer solo uno de ellos de forma aleatoria.
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};