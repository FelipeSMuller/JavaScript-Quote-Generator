/* ---------> Métodos para selecionar elementos com JavaScript DOM.

getElementById()
Esse método seleciona um elemento por um ID, ou seja, de maneira mais específica.

document.getElementById("Id-name");

getElementByClassName() =>
Selecionar os elementos através do nome da classe, permite selecionar diversos elementos semelhantes , da mesma maneira que o CSS.
Retorna uma coleção de elementos.

getElementByTagName() -----> É semelhante ao byClass Name

Retorna todos os elementos com uma tag específica.
Na ordem em que eles aparecem no document
Retorna um array de objetos.

querySelector () ---> Esse método seleciona apenas o primeiro elemento que 'bate' com a busca que foi executada.
Seleciona apenas um item, ou o primeiro que aparecer.

querySelectorAll() ----> Esse método retorna uma nodelist


Quando precisamos selecionar um elemento através do DOM, temos 5 maneiras diferentes disponíveis.

-------------Styling an Element-------

const title = document.querySelector('Selecionar ID ou classe');

title.style. QualquerPropriedadeCSS
 ---->
Dessa maneira estamos aplicando o CSS inline, ou seja, em apenas um elemento.


Para aplicar multiplos estilos em determinados elementos podemos utilizar o Loop, ja que , elementos inline funcionam apenas em um único.

--------------->Creating Elements<----

Podemos utilizar o método Append, para acrescentar um elemento, podemos faze-lo  também acrescentando um elemento como o filho de outro elemento.

document.append() <-------
document.appendChild() <------
document.creatElement(); <------


Continuar --- Modify Text 19:32
innerText ----- Com o innerText podemos observar o texto que está contido dentro do nodeList 



textContent -----
InnerHTML ----
InnerHTML mostra o texto e as tags contidas dentro do mesmo elemento.
Então, em muitos casos utilizaremos o innerText.


---------Modifying Attributes & Classes ---------

O primeiro método que iremos observar é o setAttribute() ou -- definir atributo.

Precisamos incluir dois valores como parametros no setAttribute, o primeiro é o id ou classe

setAttribute('id', 'Main-heading');

------------>
variavel.removeAttribute('id');
variavel.getAttribute('id');

Também temos o classList, que tem diversas propriedades associadas a ele.

variavel.classList.add() -> Adiciona uma classe 

variavel.classList.remove();

Podemos verificar se há ou não uma classe ou ID associada a um determinado elemento com o método contains.

variavel.classList.contains("");
retorna true or false


/------------Remove Elements------

variavel.remove();

----------------------------

DOM Tree recap - 

Tudo que nós vemos na arvore dom é um node

https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList


//--------------Traversing the DOM -------------


Parent Node Traversal

Para achar o parent Node de um elemento podemos faze-lo de duas maneiras, a primeira é utilizando parentNode
a segunda é 
parentElement

-^- Achando o parent

PORÉM, para a achar o seu grandParent duplicamos o parentNode, ou parentElement
Nodes podem ser comentários, linhas de quebra, documentos ou até mesmo textos.


Porém, o parentNode é mais utilizado comparado ao parentElement.



---------------------------x-------------------
-------ChildNode Traversal----


Temos as propriedades childNodes e ChildElements que funcionam exatamente da mesma maneira.


firstChild -> Seleciona o primeiro item de um nodeList
lastChild -> como o próprio nome ja diz seleciona o último item de uma nodeList.


Também temos :

variavel.children
variavel.firstElementChild
variavel.lastElementChild



Siblins --------
Sao elementos que estão no mesmo nível de hierarquia, sendo assim, eles precisam estar na mesma "Altura".

variavel.previousSiblings.
variavel.nextSiblings.

Podemos utilizar também :

variavel.previousElementSibling :

variavel.nextElementSibling;


---------Event Listeners-----
element.addEventListener("click" , function(){

});



-------Event Propagation ----
Diz respeito ao caminho em que um evento atravessa através do DOM.

3 fases do event propagation 

1.Event Capturing.
2.Target
3. Event Bubbling.


A fase de captura começa na raiz da arvore DOM e atravessa todo caminho até o alvo.
Após chegar no alvo atravessa para a fase de bublling e faz o caminho contrário voltando para o target e retornando para o root , notificando cada elemento que estava no caminho.


terceiro parametro no addEventListener

----------//
This is a long-winded way of getting to addEventListener. addEventListener listens for both capture phase and bubbling phase events. The third parameter (called useCapture in the specification) allows the programmer to specify which phase they want to use.

In modern browsers, this defaults to false. You will probably never come across a circumstance where you want to use the capturing phase, especially as Internet Explorer still doesn't support it. But old browsers need the false to be explicit, so it is generally provided for backwards-compatibility.

If true, useCapture indicates that the user wishes to initiate capture. After initiating capture, all events of the specified type will be dispatched to the registered listener before being dispatched to any EventTargets beneath it in the DOM tree. Events which are bubbling upward through the tree will not trigger a listener designated to use capture. See DOM Level 3 Events for a detailed explanation.




------//



Podemos utilizar o método StopPropagation(); 
em quaisquer dos elementos.

temos também o método preventDefault();



---------------Event Delegation --------------


Permite ao usuário a adição de um único event listener para um elemento pai que adiciona para seus filhos atuais e futuros que dá um 'match' com o 
*/


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

