document.addEventListener("DOMContentLoaded", function () {
    const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");
    const listaItens = document.getElementById("lista-itens");
    const totalCarrinho = document.getElementById("total-carrinho");

    let carrinho = [];
    
    botoesAdicionar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const nome = botao.getAttribute("data-nome");
            const preco = parseFloat(botao.getAttribute("data-preco"));

            carrinho.push({ nome, preco });
            atualizarCarrinho();
        });
    });

    function atualizarCarrinho() {
        listaItens.innerHTML = "";
        let total = 0;

        carrinho.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaItens.appendChild(li);
            total += item.preco;
        });

        totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
    }
});

const cart = [];

    function addToCart(productId) {
      const product = document.querySelector(`[data-id="${productId}"]`);
      const productName = product.textContent.split('-')[0].trim();
      const productPrice = parseFloat(product.textContent.split('R$')[1]);

      const item = { id: productId, name: productName, price: productPrice };

      cart.push(item);

      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart');
      cartList.innerHTML = '';

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(li);
      });
    }