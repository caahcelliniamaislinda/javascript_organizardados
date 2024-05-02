const livros = require('./listaLivros');
const menorValor = require('./MenorValor');

//1
for (let atual= 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual)
    
    let livroAtual = livros[atual];
    console.log('posiçao atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preco', livros[menor])

    livros[atual] = livroMenorPreco 
    livros[menor] = livroAtual


}