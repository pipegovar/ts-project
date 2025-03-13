(()=> {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }
    
    const products: Product[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: 'Prod1',
        createdAt: new Date(2001, 2, 10),
        stock: 56
    })
    addProduct({
        title: 'Prod1',
        createdAt: new Date(2001, 2, 10),
        stock: 12,
        size: 'L'
    })
    console.log(products);
    products.push({
        title: 'Prod3',
        createdAt: new Date(1998, 1, 10),
        stock: 25,
        size: 'L'
    })
})();