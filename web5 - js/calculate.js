class Product {
    name;
    pricePerOne;
    quantity;
    constructor(priceOption, quantity) {
        this.name = "";
        this.pricePerOne = "";
        this.quantity = parseFloat(quantity);

        if (this.quantity < 1) {
            throw new Error('Quantity cannot be less than 1');
        }
        if(Number.isInteger(this.quantity) === false) {
            throw new Error('Quantity should be integer');
        }

        let i=0;
        for(i; i<priceOption.length && priceOption[i]!==' '; i++) {
            this.name += priceOption[i];
        }
        i++;
        for(i; i<priceOption.length && priceOption[i]!==' '; i++) {
            this.pricePerOne += priceOption[i];
        }
        this.pricePerOne = parseFloat(this.pricePerOne);
    }

    getFinalPrice() {
        return this.pricePerOne * this.quantity;
    }
}

function onClick(event) {
    event.preventDefault();
    let productOption = document.getElementById('productOptions').value;
    let quantity = document.getElementById('quantity').value;
    try {
        let product = new Product(productOption, quantity);
        document.getElementById('result').textContent = 'Final price: ' + product.getFinalPrice();
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    document.getElementById('button').addEventListener('click', onClick);
});