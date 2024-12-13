// funcão de clicar no botão
function calcular(){
    let txtv = document.getElementById('txtvalor'); // selecionando elementos
    let selecao = document.getElementById('select');

    if(txtv.value.length == 0){ // validando se o número é vazio
        alert('Por favor insira um número')
        selecao.innerHTML = ""
         
   }
    else{
        selecao.innerHTML = "" // limpando o conteúdo anterior

        let cont = 1
       // fazendo um laço de teste lógico no final
        do{
            let n = Number(txtv.value);
            let item = document.createElement('option'); //criando elemento option
            let vezes = n * cont //multiplicando
            item.innerHTML = `${n} x ${cont} = ${vezes}`
            selecao.appendChild(item)
            cont+=1
        }
        while(cont<=10){
            
        }
        
    }
}