
function exibirObjetos() {

let celular = function(){

    this.cor = "prata";
    
    this.ligar = function()
{
    console.log("uma ligação");
    return "ligando";
    
    }
    
    }
    
    let objeto = new celular();
    
    console.log(objeto.ligar());

//
    class phone {

        constructor(){
        
        this.cor = "prateado";
        }      
    
    }

    function ligar() {

        console.log("uma ligação");
        return "ligando";
    }
        
        let object = new celular();
        
        console.log(objeto.ligar());

}