// Função genérica para criar a galeria
function criarGaleria({ imagensSelector, anteriorId, proximaId, container }) {
  const imagens = document.querySelectorAll(imagensSelector);
  const botaoAnterior = document.getElementById(anteriorId);
  const botaoProxima = document.getElementById(proximaId);
  const containerEl = document.querySelectorAll('.container-seção-projetos')[container];
  let indice = 0;

  // mostra imagem inicial
  imagens[indice].classList.add('active');
  containerEl.style.setProperty('--bg-img', `url(${imagens[indice].src})`);

  function atualizarGaleria(novoIndice) {
    imagens[indice].classList.remove('active');
    indice = novoIndice;
    imagens[indice].classList.add('active');
    containerEl.style.setProperty('--bg-img', `url(${imagens[indice].src})`);
  }

  botaoProxima.addEventListener('click', () => {
    const proximo = (indice + 1) % imagens.length;
    atualizarGaleria(proximo);
  });

  botaoAnterior.addEventListener('click', () => {
    const anterior = (indice - 1 + imagens.length) % imagens.length;
    atualizarGaleria(anterior);
  });
}

// Criando as 3 galerias com base no seu HTML
criarGaleria({
  imagensSelector: '.galeria-imagem1',
  anteriorId: 'anterior1',
  proximaId: 'proxima1',
  container: 0
});

criarGaleria({
  imagensSelector: '.galeria-imagem2',
  anteriorId: 'anterior2',
  proximaId: 'proxima2',
  container: 1
});

criarGaleria({
  imagensSelector: '.galeria-imagem3',
  anteriorId: 'anterior3',
  proximaId: 'proxima3',
  container: 2
});

