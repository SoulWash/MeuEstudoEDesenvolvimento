class Utils {
    static liguagemDoSistema = 'pt-Br';

    static obterDataProxMes(){
        let now = new Date();

        let date;

        if(now.getMonth() === 11){
            date = new Date(now.getFullYear() + 1, 0, now.getDate());
        } else {
            date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        }

        return date.toLocaleDateString(this.liguagemDoSistema)
    }
}

console.log(`O próximo mês é: ${Utils.obterDataProxMes()}`)
console.log(`A liguagem do sistema é: ${Utils.liguagemDoSistema}`)