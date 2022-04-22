import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ApiCall } from './../src/exchange.js';

function error(element, response) {
  if (response instanceof Error) {
    $(element).text("");
    $(element).append(
      "<p class='error'>There was an error pulling this data from the API<p>"
    );
    return true;
  } else {
    return false;
  }
}

async function getExchange(currency1,currency2) {
  const url = `https://v6.exchangerate-api.com/v6/9e9e75e88278f7b0de98ee1a/pair/${currency1}/${currency2}`;
  const response = await ApiCall.get(url);
  const withError = error($('.output'), response);
  if (!withError) {
    const rateURL = response.url;
    $('#input1').text(rateURL);
  }
}

$("#rate").submit(async function (event) {
  event.preventDefault();
  let input1 = parseInt($('#input1').val());
  let input2 = $('#input2').val();
  input2.toLowerCase();
  console.log(input1, input2);
  const output = getExchange(input2);
});
