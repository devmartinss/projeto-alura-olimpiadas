function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se o campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um atleta ou esporte.</p>"
       return          
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    console.log(campoPesquisa)
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        // se no dado.titulo.oncludes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link}" target="_blank">Clique aqui para mais informações.</a>
            </div>
    `;
        }
     
    
    }

    if(!resultados){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    
    section.innerHTML = resultados    
}