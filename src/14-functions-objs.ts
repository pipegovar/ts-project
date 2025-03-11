(()=> {
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }

    // login('pipe@felipe.com', 'rthfgfsdft6777');
    login({
        email: 'pipe@felipe.com', 
        password: 45657686
    });

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    
    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
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
})();