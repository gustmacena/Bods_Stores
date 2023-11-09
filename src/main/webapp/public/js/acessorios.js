// Adicione um evento de clique à imagem para mostrar o botão "Adicionar ao Carrinho"
const produtosContainers = document.querySelectorAll('.produtos-container');

produtosContainers.forEach((container) => {
  const imagemProduto = container.querySelector('img');
  const botaoAdicionar = document.createElement('button');
  botaoAdicionar.textContent = 'Adicionar ao Carrinho';

  imagemProduto.addEventListener('click', () => {
    // Verifique se o botão já não foi adicionado
    if (!container.contains(botaoAdicionar)) {
      container.appendChild(botaoAdicionar);
    }
  });
});
document.querySelector('header a[href="#"]').addEventListener('click', function (e) {
  e.preventDefault();
  // Implemente a lógica para abrir o carrinho aqui
});

// Função para atualizar a quantidade no carrinho quando um produto for adicionado
function atualizarQuantidadeNoCarrinho() {
  const qtdCarrinho = document.querySelector('.notificacao');
  let quantidadeProdutosNoCarrinho = parseInt(qtdCarrinho.textContent);
  quantidadeProdutosNoCarrinho++;
  qtdCarrinho.textContent = quantidadeProdutosNoCarrinho;
}

// Função para destacar produtos populares quando o mouse passa por cima
function destacarProduto(produto) {
  produto.classList.add('destacado');
}

// Função para remover o destaque quando o mouse sai do produto
function removerDestaqueProduto(produto) {
  produto.classList.remove('destacado');
}

// Função para pesquisa em tempo real
const campoPesquisa = document.getElementById('campoPesquisa');
const resultadosPesquisa = document.getElementById('resultadosPesquisa');

campoPesquisa.addEventListener('input', () => {
  const termoPesquisa = campoPesquisa.value.toLowerCase();
  // Implemente a lógica de pesquisa em tempo real e exiba os resultados aqui
});

// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});