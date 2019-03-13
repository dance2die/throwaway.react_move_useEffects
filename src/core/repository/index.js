const baseUrl = "https://jsonplaceholder.typicode.com";

function get(url) {
  return fetch(url).then(resp => resp.json());
}

export { baseUrl, get };
