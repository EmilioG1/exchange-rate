import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ApiCall } from './../src/exchange.js';


async function getExchange(money) {
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
  const response = await ApiCall.get(url);
}

$("#submit").submit(function (event) {
  event.preventDefault();
  

});