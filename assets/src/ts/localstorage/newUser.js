function dados(info) {
    info.preventDefault();
    var personEmailForm = info.target.elements.item(0).value;
    var personPassworldForm = info.target.elements.item(1).value;
    var newUser = /** @class */ (function () {
        function newUser(personEmail, personPassorld) {
            this.personEmail = personEmailForm;
            this.personPassworld = personPassworldForm;
        }
        return newUser;
    }());
    //TODO caso falhe
    var createStorage = new newUser(personEmailForm, personPassworldForm);
    if (localStorage.getItem("person") === null) {
        var stringify = JSON.stringify(createStorage);
        localStorage.setItem("person", stringify);
    }
}
