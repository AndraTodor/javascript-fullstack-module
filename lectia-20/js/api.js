const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

export default class NewsApi {
  constructor() {
    this.querryPage = 1;
    this.searchQuerry = "";
  }

  getNews() {
    const url = `${ENDPOINT}?apiKey=${API_KEY}&q=${this.searchQuerry}&pageSize=5&page=${this.querryPage}`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.incrementPage();
        return data;
      });
  }

  resetPage() {
    this.querryPage = 1;
  }

  incrementPage() {
    this.querryPage += 1;
  }
}
