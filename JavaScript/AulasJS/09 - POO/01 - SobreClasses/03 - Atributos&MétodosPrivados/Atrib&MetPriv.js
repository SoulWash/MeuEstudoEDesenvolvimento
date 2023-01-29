// Atributos e método privados:
//Forma de não deixar atributos e métodos acessíveis fora da classe;
//Quando precisar que nenhuma outra classe interfira em um bloco;

class MinhasClasse{
    #atributoPrivado;
    #atributoPrivadoComInicializacao = 10;

    #metodoPrivado(){
        //alguma lógica
    }

    get #getAtributoPrivado(){
        return this.#atributoPrivado;
    }

    set #setAtributoPrivado(attr){
        this.#atributoPrivado = attr;
    }

    constructo(){
        this.#setAtributoPrivado = 30;
        this.#atributoPrivado = 11;
    }
}