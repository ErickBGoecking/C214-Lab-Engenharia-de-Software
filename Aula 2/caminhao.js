class Caminhao extends Veiculo{
    eixos;

    constructor(placa,ano,eixos){
        super(placa,ano);
        this.eixos=eixos;
    }

    setEixos(eixos){
        this.eixos=eixos;
    }
    getEixos(){
        return this.eixos;
    }

    exibirDados(){

        super.exibirDados();
        console.log(`Número de eixos: ${this.eixos}`)
    }
}

var c=new Caminhao("QYU-9089",2002,4);
c.exibirDados();
