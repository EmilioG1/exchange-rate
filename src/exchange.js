export class ApiCall {
  static get(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}

export class ExchangeRate {
  constructor(money1, money2);
    this.euro = euro;
  
}