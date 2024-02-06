    const P1 = parseFloat(prompt("Ingrese precio del producto"))
    const P2 = parseFloat(prompt("Ingrese precio del producto"))
    const P3 = parseFloat(prompt("Ingrese precio del producto"))
    const descuento = prompt('Ingrese la terjeta: \n 1- Visa \n 2- Visa Electron \n 3- American Express \n 4-MasterCard  \n Escriba ESC para terminar')
while(descuento != 'ESC'){
    
    
    const suma = (P1+P2+P3)
    switch(descuento){
        case'1':
            alert("El total es: " + suma*0.9)
        break
        case'2':
            alert("El total es: " + suma*0.85)
        break
        case'3':
            alert("El total es: " + suma*0.8)
        break
        case'4':
            alert("El total es: " + suma*0.75)
        break
        default:
            alert(suma)
        break
    }
}