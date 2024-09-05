//criar constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

//função para capturar o valor do input
function Coletar() {
    let cidade = document.querySelector('.input-cidade').value
    console.log(cidade)
    Dados(cidade)
}

//consumindo dados da API openweather
async function Dados(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    console.log(dados)
    ExibirDados(dados)
}

//função trocar dados na tela
function ExibirDados(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector('.Previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.vento').innerHTML = "Velocidade: " + dados.wind.speed + "km/h"
}
