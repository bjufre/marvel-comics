import { stringify } from 'query-string';


const version = 'v1';
const apiKey = 'a1af9305675ac96b2505d95b4d442607';

export default (endpoint, params = {}) => {
  const defaultParams = {
    apikey: apiKey,
  };
  const queryParams = {...defaultParams, ...params};
  const base = `http://gateway.marvel.com/${version}/public`;
  const url = base + (endpoint[0] === '/' ? endpoint : `/${endpoint}`);

  return `${url}?${stringify(queryParams)}`;
}
