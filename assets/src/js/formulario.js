/*Validacao*/ 

/*********************************/


/* Revelar e camuflar a senha*/ 

function revelarSenha(){
    /*Essa funcao revela a senha se ela estiver camuflada*/ 
    let senhaCamuflada = document.getElementById('inputSenha')
    
    /*Aqui ela verifica qual o atributo  */
    if(senhaCamuflada.getAttribute('type') == 'password' ){
        console.log('Revelando')
        
        /*Se estiver como password ela troca para text e vice versa*/ 
        senhaCamuflada.setAttribute('type' , 'text')
    } else {
        console.log('Camuflando')
        senhaCamuflada.setAttribute('type','password')
    }


}


function validacaoCampo(dados){

    dados.preventDefault()

}