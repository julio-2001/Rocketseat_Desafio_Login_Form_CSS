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

    //TODO caso falhe
    var createStorage:object = new newUser(
        personEmailForm,
        personPassworldForm,
    )
    
    if(localStorage.getItem("person") === null){

        const stringify = JSON.stringify(createStorage)
        localStorage.setItem("person", stringify)
    }


}


