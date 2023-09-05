var miLaptop = {
    Modelo: "15-dw0004la",
    Procesador: "Intel Core i7",
    MemoriaRAM: "8GB",
    DiscoDuro: "256GB",
    Peso: "1.74 kg",
    caracteristicas: function(){
        console.log(`Mi laptop tiene las siguientes caracteristicas ${this.Modelo} ${this.Procesador} ${this.MemoriaRAM} ${this.DiscoDuro} ${this.Peso}`)
    }
}

miLaptop.caracteristicas()