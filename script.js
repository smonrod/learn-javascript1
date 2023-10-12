const vendedor = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function(){
        return "Pedro ha vendido un auto"
    },
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido

    }
}

//this se utiliza para llamar al atributo que esta fuera de su función o scope
console.log(vendedor.nombreCompleto())