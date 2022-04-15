class UserController {
  constructor(){

  }

  getAllUsers(){
    return [
    {name : "Pedro",age : 22, email : "pedro@ggkl.com"},
    {name : "Marcos",age : 22, email : "marcos@gkl.com"},
    {name : "João",age : 22, email : "moão@geg.com"},
  ]
  }
}

module.exports = UserController;