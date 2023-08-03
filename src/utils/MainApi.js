class MainApi{
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  registr(name, email, password) {
    this._request =this._baseUrl + '/signup';
    return fetch(this._request, {
      credentials: "include",
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name, email, password})
    }).then((response) => response.json())
    .then((res) => res)
  }

  authorize(email, password) {
    this._request = this._baseUrl + '/signin';
    return fetch(this._request, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then((res) => res.json())
    .then((data) => {
      if(data._id) {
        localStorage.setItem('userId', data._id)
      }
      return data;
    })
  }

  tokenCheck() {
    this._request = this._baseUrl + '/users/me';
    return fetch(this._request, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    }).then((res) => res.json())
    .then((res) => {return res})
  }

  getUserInfo() {
    this._request = this._baseUrl + '/users/me';
    return fetch(this._request, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => res.json())
  }

  updateUser(name, email) {
    this._request = this._baseUrl + '/users/me';
    return fetch(this._request, {
      credentials: 'include',
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(name, email)
    }).then((res) => res.json())
    .then((res) => res)
  }

  signOutUser() {
    this._request = this._baseUrl + '/signout';
    return fetch(this._request, {
      credentials: 'include',
      method: "POST",
      headers: this._headers
    }).then((res) => res.json())
    .then((res) => res)
  }

  getSavedMovies() {
    this._request = this._baseUrl + '/movies'
    return fetch(this._request, {
      credentials: 'include',
      method: "GET",
      headers: this._headers
    }).then((res) => res.json())
    .then((res) => res)
  }

  setLikeCard(card) {
    this._request = this._baseUrl + '/movies'
    return fetch(this._request, {
      credentials: 'include',
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: card.country,
        description: card.description,
        director: card.director,
        duration: card.duration,
        image: `https://api.nomoreparties.co${card.image.url}`,
        movieId: card.id,
        nameEN: card.nameEN,
        nameRU: card.nameRU,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        trailerLink: card.trailerLink,
        year: card.year,
        owner: card.owner,
      })
    }).then((res) => res.json())
    .then((res) => res)
  }

  handleDeleteCard(cardId) {
    this._request = this._baseUrl + '/movies/' + cardId;
    return fetch(this._request, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers
    }).then(res => res.json())
    .then((res) => res)
  }
}

export const api = new MainApi({
  baseUrl: 'https://api.nxxtrx.nomoredomains.xyz',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})
