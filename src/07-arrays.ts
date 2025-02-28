(()=>{
    let prices = [1,2,2,1,1,212, 'hola', true];
    // prices.push('ass');
    // prices.push(true);
    // prices.push({});
    prices.push(12344);

    let products = ['hola', true];
    products.push(false);

    let mixed: (number | string | boolean | Object)[] = ['hola', true];
    mixed.push(32);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);

    let numbers = [1,2,2,1,1,212];
    numbers.map(item => item * 2);
})();