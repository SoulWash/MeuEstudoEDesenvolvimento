
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

const totalCategories = booksByCategory.length
console.log(`Possui o total de ${totalCategories} categorias`);
for (const category of booksByCategory) {
    console.log(`Total de livros da categoria:`, category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for (let category of booksByCategory){
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = []
    let livro;

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title)
            }
        }
    }

    if(books.length === 1) {
        livro = 'Livro'
    } else {
        livro = 'Livros'
    }

    console.log(`${livro} do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Stephen R. Covey')