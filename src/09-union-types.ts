(()=> {
    let userId: string | number;
    userId = 344;
    userId = 'sdf';

    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
          console.log(`string ${myText.toLowerCase()}`);
        } else {
          console.log(`number ${myText.toFixed(1)}`);
           
        }
    }
    greeting('Felipe');
    greeting(4433.3455);
})();