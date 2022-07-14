var spButton = document.querySelector("#sp500");
var displayResult = document.getElementsByClassName('response');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2519ec2admshace2119bdc361dcp140410jsn4e6a253bcb55',
		'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com'
	}
};

fetch('https://stock-market-data.p.rapidapi.com/market/index/s-and-p-six-hundred', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err))
    .then((data) => {
        displayResult.innerText = data
    });