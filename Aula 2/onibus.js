class Onibus extends Veiculo{
    assentos;

    constructor(placa,ano,assentos){
        this.placa=placa;
        this.ano=ano;
        this.assentos=assentos;
    }

    setAssentos(assentos){
        this.assentos=assentos;
    }

    getAssentos(){
        return self.assentos;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Número de assentos: ${this.assentos}`)
    }
}

var c=new Caminhao("QLU-7011",2000,40);
c.exibirDados();
