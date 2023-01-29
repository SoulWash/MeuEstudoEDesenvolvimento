class Base{
    constructor(atributo){
        this.atributo = atributo
    }
}

class MinhaClasse extends Base {
    constructor(atributo, texto){
        super(atributo);

        this.texto = texto;
    }
    funcao(){
        console.log(`${this.atributo}: teste`);
        console.log(`${this.texto}: teste`)
    }
}


let exemplo = new MinhaClasse("teste 1", "teste 2");
exemplo.funcao()
