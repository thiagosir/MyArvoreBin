let tree = new BinaryTree();    //Define a variável 'tree' como uma árvore binária
$().ready(()=>{             //Definindo a função de cada botão.
    $('#btnInserir').click(inserir);        //Chama a função inserir
    $('#btnBuscar').click(buscar);          //Chama a função buscar
    $('#btnMenor').click(menor);        //Chama a função para mostrar o menor número
    $('#btnMaior').click(maior);        //Chama a função para mostrar o maior número
    $('#btnRemover').click(remover);        //Chama a função de remoção
    $('#btnEmOrdem').click(mostrarEmOrdem);        //Chama a função mostrar em Ordem
    $('#btnPreOrdem').click(mostrarPreOrdem);        //Chama a função Pré Ordem
    $('#btnPosOrdem').click(mostrarPosOrdem);        //Chama a função Pós Ordem
    $('#btnAltura').click(mostrarAltura);        //Mostra a altura da Árvore
    $('#btnTamanho').click(mostrarTamanho);        //Chama a função que mostra o tamanho da árvore
});
function mostrarItem(item){          //Criando a função para mostrar o item.
    let el = $('#saida');               //Variável "el" recebe a div id=saida
    el.empty();                         //Esvazia a variável "el"
    el.append(`<span class=gitdsfsdfdsfasdf"ui label">${item}</span>`);   //Mostra o item que foi inserido
}
function incluir(item){        //Cria a função que joga o item na div id = saida
    $('#saida').append(`<span class="ui label">${item}</span>`);  //Mostra na div de id = saida o item 
}

function inserir(){             //Cria a função que insere os números na árvore
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));    //Variável que recebe o número do usuário
    if(tree.search(num))                    //Verifica se o número inserido já existe
        mostrarItem('O elemento já existe!');   //Caso o adicionado já exista, a função mostrarItem receberá essa frase
    else{
        tree.insert(num);           //Se chegar aqui é porque o número adicionado não existia, então ele adiciona o número.
        mostrarItem('Inserido: '+num);       //Caso o item não exista, a função mostrarItem receberá essa frase
    }
       
}
function buscar(){          //Cria a função que busca os itens na árvore
    let num = parseInt(prompt("informe o numero a ser buscado na arvore:"));    //Cria a variável que vai receber o número que vai ser buscado
    if(tree.search(num)){   //Faz a busca do número na árvore
        alert('Numero foi encontrado na arvore!');  //Caso o número seja encontrado o usuário verá esse alert
    }else{
        alert('Numero não encontrado na arvore!'); //Caso o número não seja encontrado o usuário verá esse alert
    }
}
function menor(){               //Cria a função que mostra o menor valor da árvore
    alert('menor valor: '+tree.min());  //Mostra para o usuário o menor valor
}
function maior(){            //Cria a função que mostra o maior valor da árvore
    alert('maior valor: '+tree.max());     //Mostra para o usuário o maior valor
}

function remover(){     //Cria a função de remoção de números 
    let num = parseInt(prompt("informe o numero a ser removido na arvore:"));   //Cria a variável que vai receber o número que será removido
    if(tree.search(num)){   //Verifica se o número existe
        tree.remove(num);   //Remove o item 
        mostrarItem('O elemento foi removido!');    //Mostra um alert na tela com essa mensagem
    }else{
        mostrarItem('O elemento não existe');   //Caso o número não exista, o usuário verá esse alert em sua tela
    }
}
function mostrarEmOrdem(){  //Cria a função que executa o método 'Inorder'(esquerda, raiz, direita).
    $('#saida').empty();    //Esvazia a div de id = saida 
    tree.inOrderTraverse(incluir);  //Executa o método e joga na função incluir
}
function mostrarPreOrdem(){ //Cria a função que executa o método 'Preorder'(raiz, esquerda, direita).
    $('#saida').empty();    //Esvazia a div de id = saida
    tree.preOrderTraverse(incluir)  //Executa o método e joga na função incluir
}
function mostrarPosOrdem(){ //Cria a função que executa o método 'Postorder'(esquerda, direita, raiz)
    $('#saida').empty();    //Esvazia a div de id = saida
    tree.postOrderTraverse(incluir) //Executa o método e joga na função incluir
}
function mostrarAltura(){   //Cria a função para mostrar a altura da árvore
    alert("Altura: "+tree.heigth());   //Mostra através de um alert a altura da árvore
}

function mostrarTamanho(){   //Cria a função para mostrar o tamanho da árvore
    alert("Tamanho: "+tree.size()); //Mostra através de um alert o tamanho da árvore
}