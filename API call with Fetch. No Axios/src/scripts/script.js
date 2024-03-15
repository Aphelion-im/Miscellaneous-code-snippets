// Voorbeeld:
// https://github.com/BeGeos/marvel-api-search-engine
// https://github.com/BeGeos/marvel-api-search-engine/blob/main/src/libs/utils.js
// https://www.npmjs.com/package/dotenv

'use strict';

window.addEventListener('load', () => {
  console.log('Connected!');
  let resultsArray = [];

  const fetchButton = document.querySelector('.fetch-btn');

  async function fetchMarvelData() {
    try {
      const response = await fetch(
        'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=4780bcc0dddcf771e505b68197ce5f56&hash=d9ed2fbdb825b21f96f7f62eb48cecef'
      );
      resultsArray = await response.json();
      console.log(resultsArray);
      // console.log(resultsArray[0].data.attributionHTML);
      // console.log(results.data.results.characters);
    } catch (error) {
      console.error(error);
    }
  }

  // Event listeners
  fetchButton.addEventListener('click', fetchMarvelData);
}); // End window eventlistener
