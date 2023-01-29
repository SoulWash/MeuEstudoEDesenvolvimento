// Static
// Pode ser utilizado em variáveis e métodos
// Indica um valor estático, que não depende da instância da classe
// Utilizar em variáveis de configuração e métodos utilitários

class MinhaClasse {
    static variavel = 10;

    static metodo(){
        //alguma lógica
        console.log('Chamou o método');
    }
} 

console.log(MinhaClasse.variavel)
MinhaClasse.metodo()