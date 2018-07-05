{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}
//Visível fora do bloco (escopo) também
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)

//Fugir do escopo global, pois pode sobrescrever valor
//Variáveis com var têm escopo global ou de função