let age=prompt ("Bienvenido/a a Okami Manga Store, ¿Es usted mayor de 14 años de edad?").toLowerCase()

while (age !="si" && age != "no"){
    alert("Por favor ingrese si o no")
    age=prompt ("Bienvenido/a a Okami Manga Store, ¿Es usted mayor de 14 años de edad?")
}

if(age=="si"){
    alert("A continuación se muestra nuestro menú")
    
}else if (age=="no"){
    alert("Nuestra selección de Manga puede contener palabras e imágenes explícitas, se recomienda discreción de un adulto a la hora de realizar una compra.")
}


let mainMessage = "Okami Manga Store\n1 - Catálogo de Manga\n2 - Ver Carrito de Compra\n3 - Total a pagar + IVA\n4 - Finalizar compra"
let itemList = "1 - Shonen $10 USD\n2 - Seinen $14 USD\n3 - Sports $11 USD\n4 - Shojo $18 USD\n5 - Comedy $12 USD\n6 - Yaoi $15 USD"


let total = 0
do {
    menu = menuReq(mainMessage)
    switch (menu) {
        case 1:
            let product = menuReq(itemList)
            switch (product) {
                case 1:
                    total = total + 10
                    break
                case 2:
                    total = total + 14
                    break
                case 3:
                    total = total + 11
                    break
                case 4:
                    total = total + 18
                    break
                case 5:
                    total = total + 12
                    break
                case 6:
                    total = total + 15
                    break
                default:
                    alert("Artículo inexistente")
                    break
            }console.log("Valor Neto $"+total+" USD")
            break
        case 2:
            alert("El total neto de su pedido es: $" + total + " USD")
            break
        case 3:
            const iva = ((total*0.2)+total)
            alert("El valor total de su pedido a pagar es: $"+ iva + " USD")
            break
        case 4:
                alert("Gracias por su compra!")
                break
        default:
            alert("Ingrese una categoría correcta")
            break
    }
} 
while (menu !== 0 && menu !== 4)
function menuReq(message) {
    return Number(prompt(message))
}
