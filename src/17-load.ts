import _ from 'lodash';

const data = [
    {
        username: 'pipe',
        role: 'admin'
    },
    {
        username: 'angie',
        role: 'seller'
    },
    {
        username: 'andrea',
        role: 'seller'
    },
    {
        username: 'miguel',
        role: 'customer'
    }
];

const rta = _.groupBy(data , (item) => item.role);
console.log(rta);

