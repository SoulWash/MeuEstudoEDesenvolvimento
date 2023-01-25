// Array dos livros
const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title:"Os segredos da mente milionária",
                    author: "T. Harv Eker",

                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title:"Pai rico, pai pobre",
                    author:"Robet T. Kiyosaki e Sharon L. Lechter",
                },
            ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title:"Você é Insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            },
        ],
    },
];

//Passo 1 - Contar o número de categorias:
const totalCategories = booksByCategory.length
console.log(`Possui o total de ${totalCategories} categorias`);

//Passo 2 - Vai informar o nome de cada categoria e contar o número de livros(books) em cada categoria:
for (const category of booksByCategory) {
    console.log(`Total de livros da categoria:`, category.category)// Nome da categoria
    console.log(category.books.length)// Número de livros
}


//Passo 3 - Total de Authors:
function countAuthors(){
    let authors = []; //Os autores vão ficar armazenados no array

    for (let category of booksByCategory){  // O loop vai encontrar pegar o que estiver armazenado no array "booksByCategory"
        for(let book of category.books) { // vai ser guardado o objeto(books) do array que vai ser chamado de "book"
            if(authors.indexOf(book.author) == -1){ // Se o autor NÃO estiver dentro do array e por ele não estar dentro for igual a verdadeiro(-1) 
                authors.push(book.author) // Vai ser adicionado o autor no array
            }
        }
    }

    console.log("Total de autores: ", authors.length) //Mostrando a quantidade númerica de autores dentro do array
}

countAuthors(); //Chamando a função

//Passo 4 - Mostrar os livros dos autores escolhidos

function booksOfAuthor(author){ //Parametros do autor escolhido
    let books = []
    let livro;

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){ //Se o nome do autor do livro for igual ao nome do autor escolhido
                books.push(book.title) // Vai ser adiconado os livros no array "books"
            }
        }
    }
// Extra - Quando o autor tiver apenas 1 livro no array for "books" irá ficar no singular
    if(books.length === 1) {
        livro = 'Livro'
    } else {
        livro = 'Livros'
    }

    console.log(`${livro} do autor ${author}: ${books.join(", ")}`) //Join vai transformar o array em uma string
}

booksOfAuthor('Stephen R. Covey') //Chamada da função com o nome do autor