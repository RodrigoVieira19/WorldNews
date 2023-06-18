// API geral 
function apiGeral () {
fetch('https://gnews.io/api/v4/search?q=news&lang=en&token=6c8add4332839c3472b61eb85b7772de')
  .then(response => response.json())
  .then(data => {
    const gridItems = document.querySelectorAll('.grid-item');

    for (let i = 0; i < gridItems.length; i++) {
      const randomNumb = Math.floor(Math.random() * data.articles.length);
      const article = data.articles[randomNumb];
      const gridItem = gridItems[i];

      gridItem.querySelector('h2').textContent = article.title;
      gridItem.querySelector('p').textContent = article.description;

      gridItem.addEventListener('click', () => {
        window.location.href = article.url;
      });

      data.articles.splice(randomNumb, 1);
    }
  })
  .catch(error => {
    console.log("Erro: " + error);
  });
}




//API BBC
function apiBBC () {
function attConteudo(titulo, info) {
  document.querySelector('#newsTitle').textContent = titulo;
  document.querySelector('#newsInfo').textContent = info;
}

fetch('https://gnews.io/api/v4/top-headlines?lang=en&topic=bbc&token=6c8add4332839c3472b61eb85b7772de')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    if (articles.length > 0) {
      const randomNumb = Math.floor(Math.random() * articles.length);
      const news = articles[randomNumb];

      attConteudo(news.title, news.description);
    } else {
      console.log('Nenhuma noticia encontrada');
    }
  })
  .catch(error => {
    console.log('Erro:', error);
  });
}


apiGeral ();
apiBBC();