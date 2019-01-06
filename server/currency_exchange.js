const axios = require('axios');

const currency_url = 'http://data.fixer.io/api/latest?access_key=7dda9776a15e8e2b5c783153ffa96e64'
const country_cur = 'https://restcountries.eu/rest/v2/currency/'

/*const exchangeRate = (from,to) => {
    axios.get(currency_url).then((result) => {
        const euro = 1/result.data.rates[from];
        const rate = euro*result.data.rates[to];
        return rate;
    });

}*/
/*
const getCountries = (currency_code) => {
    axios.get(`${country_cur}${ccurrency_code}`).then((response) => {
        return response.data.map((country) => country.name);
    });
}*/

const exchangeRate = async (from,to) => {
    try {
        const result = await axios.get(currency_url);
        const euro = 1/result.data.rates[from];
        const rate = euro*result.data.rates[to];
        return rate;
    }catch(e) {
        throw new Error(`unable to get exchange rate`)
    }
}
const getCountries = async (currency_code) => {

    const response = await axios.get(`${country_cur}${currency_code}`);
    return response.data.map((country) => country.name);
}

exchangeRate('USD','INR').then((data) => {
    console.log(data);
});

getCountries('AED').then((data)=>{
    console.log(data);
});

const convertCurrency = async (from,to,amt) => {

    const rate = await exchangeRate(from,to);
    const countries = await getCountries(to);
    const total_amt = (rate * amt).toFixed(2);
    return `after converting ${from} to ${to} for ${amt} ${from} we got ${total_amt} ${to} valid in ${countries}`
}

convertCurrency('USD','INR',20).then(data => console.log(data));


exports.convertCurrency = convertCurrency;
