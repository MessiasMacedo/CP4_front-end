(function () {
  'use strict';

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('produto');
  const produto = PRODUTOS[slug] || Object.values(PRODUTOS)[0];

  document.title = `${produto.nome} — EcoTrend`;

  const imagem = document.getElementById('produtoImagem');
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;

  document.getElementById('produtoCategoria').textContent = produto.categoriaLabel;
  document.getElementById('produtoNome').textContent = produto.nome;
  document.getElementById('produtoPreco').textContent = produto.preco;
  document.getElementById('produtoBreadcrumb').textContent = produto.nome;

  const descricaoEl = document.getElementById('produtoDescricao');
  descricaoEl.replaceChildren();
  produto.descricao.forEach((paragrafo, i) => {
    const p = document.createElement('p');
    p.className = i === produto.descricao.length - 1 ? 'text-body-secondary mb-4' : 'text-body-secondary';
    p.textContent = paragrafo;
    descricaoEl.appendChild(p);
  });
})();
