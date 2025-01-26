class formaDeBolo{
    constructor(saborDaMassa, recheio){
        this.saborDaMassa = saborDaMassa
        this.recheio = recheio
    }
    escrever(){//function da class
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.recheio}`)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "nutella")//objeto
 let boloPremium = new formaDeBolo("massa de baunilha", "beijinho")
boloFesta.escrever()//incia a function
boloPremium.escrever()