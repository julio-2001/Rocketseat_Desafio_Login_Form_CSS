

function userLogin(user){

    user.preventDefault()

    const emailUser:string = user.target.elements.item(0).value
    const passworldUser:number = user.target.elements.item(1).value

    
    if(localStorage.getItem("person") !== null){
       
        const stringify = localStorage.getItem('person')

        if(stringify !== null ){

          var parsefg = JSON.parse(stringify)
          const userLogin = Object.values(parsefg)
            
           const loginEmailUser = userLogin['0']
           const loginPassworldUser = userLogin['1']
           
           if(emailUser === loginEmailUser && passworldUser === loginPassworldUser){

                console.log('Bem vindo')
                alert('Bem vindo')
                return true

            } else {

                alert('Email ou senhas invalidos')
                return false
            }
        }


    }else(

        alert("Não foi encontrado uma conta. Registre-se")
    )
}

