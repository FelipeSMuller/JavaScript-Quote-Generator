const quotes = [
    { quote: "Você enfrentará muitas derrotas na vida, mas nunca se deixe ser derrotado.", person: "Maya Angelou" },
    { quote: "A maior glória de viver não está em nunca cair, mas em nos levantar toda vez que caímos.", person: "Nelson Mandela" },
    { quote: "No final das contas, não são os anos de sua vida que contam. É a vida em seus anos.", person: "Abraham Lincoln" },
    { quote: "Eu quero sentir a minha vida enquanto eu estou nela.", person: "Meryl Streep" },
    { quote: "O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher.", person: "Cora Coralina" },
    { quote: "A vida é a arte do encontro, embora haja tanto desencontro pela vida.", person: "Vinicius de Moraes" },
    { quote: "O sucesso geralmente vem para aqueles que estão ocupados demais para procurá-lo.", person: "Henry David Thoreau" },
    { quote: "O verdadeiro teste não é se você evitará esse fracasso, porque não o fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou se você aprende com ele; se você escolhe perseverar.", person: "Barack Obama" },
    { quote: "A perfeição é alcançada, não quando não há mais nada para acrescentar, mas quando não há mais nada para tirar.", person: "Antoine de Saint-Exupéry" },
    { quote: "A única pessoa livre é aquela que não tem medo do ridículo.", person: "Luiz Fernando Veríssimo" },
    { quote: "Só é lutador quem sabe lutar consigo mesmo.", person: "Carlos Drummond de Andrade" },
    { quote: "Os limites do possível só podem ser definidos indo além do impossível", person: "Arthur C. Clarke" },
    { quote: "O sonho é que leva a gente para a frente. Se a gente for seguir a razão, fica aquietado, acomodado.", person: "Ariano Suassuna" },
    { quote: "Todos os nossos sonhos podem virar realidade, se tivermos a coragem de persegui-los.", person: "Walt Disney" },
    { quote: "Você deve pensar grande e começar pequeno.", person: "Carlos Martins Wizard" },
    { quote: "Eu nunca sonhei com o sucesso, eu trabalhei por ele.", person: "Estée Lauder" },

];


let quote = document.querySelector(".frase");
let person = document.querySelector(".autor");
let botao = document.querySelector(".botao");
botao.addEventListener("click", () => {

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person.toUpperCase();

});

