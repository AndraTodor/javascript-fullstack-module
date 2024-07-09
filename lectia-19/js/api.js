const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

function getNews(query) {
  return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then((resolve) => {
    console.dir(resolve);
    return resolve.json();
  });
}
// function getLatestNews(query) {
//     return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}&from=2024-06-08&sortBy=publishedAt`).then((resolve) => {
//         console.dir(res);
//         return res.json();
//       });
// }
export default { getNews };
