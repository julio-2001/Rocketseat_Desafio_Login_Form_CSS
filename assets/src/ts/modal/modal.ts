
function AbrirModal(){
    //mostra o modal
    let modal = document.getElementById('modal')
    modal?.classList.add('active')
    
    return modal
}



function newUserfechar(){
    //fechar modal
    let modal = document.getElementById('modal')
    modal?.classList.remove('active')
}