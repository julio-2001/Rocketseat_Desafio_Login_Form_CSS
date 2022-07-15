function AbrirModal() {
    //mostra o modal
    var modal = document.getElementById('modal');
    modal === null || modal === void 0 ? void 0 : modal.classList.add('active');
    return modal;
}
function newUserfechar() {
    //fechar modal
    var modal = document.getElementById('modal');
    modal === null || modal === void 0 ? void 0 : modal.classList.remove('active');
}
