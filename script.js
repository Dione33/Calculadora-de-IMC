document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const sexo = document.getElementById('sexo').value

    if (!peso || !altura) {
        alert("Por favor, preencha todos os campos.")
        return
    }

    const imc = peso / (altura * altura)
    let resultado = ''
    let imagem = ''

    // Lógica para determinar o resultado e a imagem com base no IMC e sexo
    if (sexo === 'masculino') {
        if (imc < 18.5) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso.`
            imagem = '<img src="baixopesom.png" alt="Abaixo do peso masculino">'
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Peso normal.`
            imagem = '<img src="pesonormalm.png" alt="Peso normal masculino">'
        } else if (imc >= 25 && imc < 29.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Sobrepeso.`
            imagem = '<img src="excessopesom.png" alt="Sobrepeso masculino">'
        } else {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Obesidade.`
            imagem = '<img src="obesidadem.png" alt="Obesidade masculina">'
        }
    } else {
        // Lógica para o sexo feminino
        if (imc < 18.5) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Abaixo do peso.`
            imagem = '<img src="baixopesof.png" alt="Abaixo do peso feminino">'
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Peso normal.`
            imagem = '<img src="pesonormalf.png" alt="Peso normal feminino">'
        } else if (imc >= 25 && imc < 29.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Sobrepeso.`
            imagem = '<img src="excessopesof.png" alt="Sobrepeso feminino">'
        } else {
            resultado = `Seu IMC é ${imc.toFixed(2)} - Obesidade.`
            imagem = '<img src="obesidadef.png" alt="Obesidade feminina">'
        }
    }

    document.getElementById('resultado').innerText = resultado;
    document.getElementById('imagem').innerHTML = imagem
})

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('sexo').value = 'masculino' // Resetando para o valor padrão
    document.getElementById('resultado').innerText = ''
    document.getElementById('imagem').innerHTML = ''
})