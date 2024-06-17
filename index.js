let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", ()=>{
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", ()=>{
    convert("brl-to-usd")
})

usdInput.value="1000,00"
convert("usd-to-brl")

usdInput.addEventListener("blur", ()=>{
    usdInput.value = formatCurrency(usdInput.value)

})

brlInput.addEventListener("blur", ()=> {
    brlInput.value = formatCurrency(brlInput.value)
})

function formatCurrency(value){
    //ajustar o valor
    let fixdValue = fixValue(value)
    //utilizar a funçao de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixdValue)
    //retoorna o valor formatado
}

function fixValue(value){
    let fixdValue = value.replace(",", ".") // troca a virgula por ponto o replace
    let floatValue = parseFloat(fixdValue)
    if(floatValue== NaN){
        floatValue =0
    }
    return floatValue
}


function convert(type){
    if(type == "usd-to-brl"){
        //ajustar o valor
        let fixdValue = fixValue(usdInput.value)
        //converter o valor
        let result = fixdValue * dolar;
        result = result.toFixed(2)
        //mostra no campo de real
        brlInput.value = formatCurrency(result)

    }

    if(type == "brl-to-usd"){
        let fixdValue = fixValue(brlInput.value)

        let result = fixdValue / dolar
        result = result.toFixed(2)
        
        usdInput.value= formatCurrency(result)
    }
}