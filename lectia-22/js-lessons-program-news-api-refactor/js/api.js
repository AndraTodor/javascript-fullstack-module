const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

// function getNews(query) {
//   return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then((resolve) => {
//     console.dir(resolve);
//     return resolve.json();
//   });
// }

const getNews = async (query) => {
  try {
    const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);
    const response = await res.json();
    //console.log(response);
    return response.articles;
  } catch (error) {
    console.log(error);
    updateNewsList("<p> Nu am gasit rezultate </p>");
  }
};

export default { getNews };
