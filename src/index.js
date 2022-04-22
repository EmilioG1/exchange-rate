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

async function getExchange(num, currency) {
  const url = `https://v6.exchangerate-api.com/v6/9e9e75e88278f7b0de98ee1a/pair/USD/${currency}/${num}`;
  const response = await ApiCall.get(url);
  const withError = error($('.output'), response);
  console.log(response.conversion_result);
  if (!withError) {
    return await response.conversion_result;
  } else {
    alert(response);
  }
}

$("#rate").submit(async function (event) {
  event.preventDefault();
  let input1 = parseInt($('#input1').val());
  let input2 = $('#input2').val();
  console.log(input1, input2);
  const output = await getExchange(input1, input2);
  console.log(output);
  $('.output').text(`That's ${output} dollars`);
});
