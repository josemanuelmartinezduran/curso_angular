export class LoginForm{
  username:String = "";
  errorUsername:String = "";
  password:String="";
  errorPassword="";

  limpiaFomulario(){
    this.username = "";
    this.password = "";
    this.errorUsername = "";
    this.errorPassword = "";
  }

  isValid():Boolean{
    let error = false;
    if(this.username == ""){
      this.errorUsername = "Debe escribir un nombre de usuario";
      error = true;
    } else {
      this.errorUsername = "";
    } if (this.password == ""){
      this.errorPassword = "La contraseña no puede estar vacía";
      error = true;
    } else {
      this.errorPassword = "";
    }
    if(error){
      return false;
    }
    return true;
  }

  login(){

  }
}
