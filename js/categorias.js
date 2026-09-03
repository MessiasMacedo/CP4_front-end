(function () {
  'use strict';

  const grade = document.getElementById('gradeProdutos');
  if (!grade) return;

  const itens = Array.from(grade.querySelectorAll('.produto-item'));
  const checksPreco = Array.from(document.querySelectorAll('.filtro-preco'));
  const checksTipo = Array.from(document.querySelectorAll('.filtro-tipo'));
  const selectMarca = document.getElementById('filtro-marca');
  const contagem = document.getElementById('resultadoContagem');
  const semResultados = document.getElementById('semResultados');
  const btnLimpar = document.getElementById('limparFiltros');

  function precoNaFaixa(preco, faixa) {
    const [min, max] = faixa.split('-').map(Number);
    return preco >= min && preco <= max;
  }

  function aplicarFiltros() {
    const faixasAtivas = checksPreco.filter((c) => c.checked).map((c) => c.value);
    const tiposAtivos = checksTipo.filter((c) => c.checked).map((c) => c.value);
    const marcaAtiva = selectMarca.value;

    let visiveis = 0;

    itens.forEach((item) => {
      const preco = parseFloat(item.dataset.preco);
      const tipo = item.dataset.tipo;
      const marca = item.dataset.marca;

      const passaPreco = faixasAtivas.length === 0 || faixasAtivas.some((f) => precoNaFaixa(preco, f));
      const passaTipo = tiposAtivos.length === 0 || tiposAtivos.includes(tipo);
      const passaMarca = !marcaAtiva || marca === marcaAtiva;

      const visivel = passaPreco && passaTipo && passaMarca;
      item.classList.toggle('d-none', !visivel);
      if (visivel) visiveis += 1;
    });

    contagem.textContent = `${visiveis} produto${visiveis === 1 ? '' : 's'} encontrado${visiveis === 1 ? '' : 's'}`;
    semResultados.classList.toggle('d-none', visiveis !== 0);
  }

  checksPreco.concat(checksTipo).forEach((el) => el.addEventListener('change', aplicarFiltros));
  selectMarca.addEventListener('change', aplicarFiltros);

  btnLimpar.addEventListener('click', () => {
    checksPreco.concat(checksTipo).forEach((el) => { el.checked = false; });
    selectMarca.value = '';
    aplicarFiltros();
  });

  aplicarFiltros();
})();
