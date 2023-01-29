class People {
    name;

    get userName (){
        return this.kebabCase(this.name);
    }

    set setName(name){
        if(!name){
            throw new Error('O nome não pode ser vazio')
        }

        if(this.varificarCarecteresEspeciais(name)){
            throw new Error('O nome não pode ter caracteres especiais')
        }

        this.name = name;
    }

// Restringir os caracteres especiais 
    varificarCarecteresEspeciais (string) {
        const regex = /[@!#$%^&*()/\\]/;
        return regex.test(string) 
    }

//Vai retornar as letras minúsculas e com '-' para separar a palavras.
    kebabCase(string){
        return string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
    }
}

let people = new People();
people.setName = "Washington Luiz de sousa";
console.log('Nome: ', people.userName);