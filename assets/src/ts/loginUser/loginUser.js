function userLogin(user) {
    user.preventDefault();
    var emailUser = user.target.elements.item(0).value;
    var passworldUser = user.target.elements.item(1).value;
    if (localStorage.getItem("person") !== null) {
        var stringify = localStorage.getItem('person');
        if (stringify !== null) {
            var parsefg = JSON.parse(stringify);
            var userLogin_1 = Object.values(parsefg);
            var loginEmailUser = userLogin_1['0'];
            var loginPassworldUser = userLogin_1['1'];
            if (emailUser === loginEmailUser && passworldUser === loginPassworldUser) {
                console.log('Bem vindo');
                alert('Bem vindo');
                return true;
            }
            else {
                alert('Email ou senhas invalidos');
                return false;
            }
        }
    }
    else
        (alert("Não foi encontrado uma conta. Registre-se"));
}
