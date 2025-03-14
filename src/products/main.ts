import { createProduct, calcStock, products } from './product.service';


createProduct({
    name: 'Prod1',
    createdAt: new Date(2001, 2, 10),
    stock: 6
})
createProduct({
    name: 'Prod1',
    createdAt: new Date(2001, 2, 10),
    stock: 10,
    size: 'L'
})

console.log(products);
const total = calcStock();
console.log(total);