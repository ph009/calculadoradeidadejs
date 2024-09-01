const input_usuario = document.getElementById("input");



function Calcularidade(){
    const data = input_usuario.value;
    const data_atual = new Date();


    const dia_atual = data_atual.getDay();
    const mes_atual = data_atual.getMonth();
    const ano_atual = data_atual.getFullYear();




    const partesData = data.split('-');

    const dia = partesData[2];
    const mes = partesData[1];
    const ano = partesData[0];

    let idade = 0

    if(dia_atual < dia && mes_atual < mes){
        idade = (ano_atual - ano) - 1;
    }
    else{
        idade = ano_atual - ano;
    }

    let displayIdade = document.getElementById("resultado");

    displayIdade.textContent = `Você tem ${idade} anos`;

}