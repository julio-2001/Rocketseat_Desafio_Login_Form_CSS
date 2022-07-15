function dados(info){

    info.preventDefault()

    
    const personEmailForm =  info.target.elements.item(0).value
    const personPassworldForm = info.target.elements.item(1).value


    class newUser{
        
        personEmail:string;
        personPassworld:number;
        
        constructor(
            personEmail:string,
            personPassorld:number,
            

        ){
            this.personEmail = personEmailForm
            this.personPassworld = personPassworldForm
        }
    }

    var createStorage = new newUser(
        personEmailForm,
        personPassworldForm
    )
    
    if(localStorage.getItem("person") === null){
        
        localStorage.setItem("person", JSON.stringify(createStorage))
    }
}


