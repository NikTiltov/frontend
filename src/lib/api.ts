const API_HOST = "http://localhost:8000";

export function getPortfolio(user_name: string, portfolio_name: string) {
   // return fetch(`${API_HOST}/${user_name}/${portfolio_name}`)
   //    .then(responce => responce.json());
   return fetch(`${API_HOST}/portfolio/open`)
      .then(responce => responce.json());
}

export function getImage(path: string) {
   return `${API_HOST}/${path}`;
}