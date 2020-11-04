import '../styles/main.scss';
import axios from 'axios';

const getJoke = () => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    $('.punchline').html('');
    $('.setup').html(`${response.data.setup}`);
    $('.get-punchline').on('click', () => {
      $('.punchline').html(`${response.data.punchline}`);
    });
  });
};

const init = () => {
  getJoke();
  $('.new-joke').on('click', getJoke);
};

init();
