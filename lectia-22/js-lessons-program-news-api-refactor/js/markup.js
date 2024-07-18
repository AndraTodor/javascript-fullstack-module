export function createMarkup(article) {
  const { author, title, description, url, urlToImage } = article;
  return `<div class="article-card">
          <h2 class="article-author"> ${title}</h2>
          <h3 class="article-title">${author}</h3>
          <img src=${urlToImage} class="article-img"/>
          <p class="article-description">${description}</p>
          <a href=${url} class="article-link" target="_blank">Read more</a>
      </div>`;
}

export function updateNewsList(markup) {
  const articlesList = document.getElementById("articlesWrapper");
  articlesList.innerHTML = markup;
}
