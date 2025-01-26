let invoice = {
    name: "flavio",
    age: 20,
    products: {
        0: ["mouse", "20.90"],
        1: ["bola", "200.90"],
        2: ["monitor", "700.50"],
    }
        
    
    
}


generateInvoice(invoice)//printa


function generateInvoice(invoice){

    for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`o nome do produto é ${productName}: R$ ${productPrice}`)

}
    
}