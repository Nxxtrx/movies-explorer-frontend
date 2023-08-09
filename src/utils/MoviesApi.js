 class MoviesApi{
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _check(res) {
    if(res.ok) {
      return res.json();
    }else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    this._request = this._baseUrl
    return fetch(this._request, {
      method: "GET",
      headers: this._headers
    }).then((res) => this._check(res))
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});
