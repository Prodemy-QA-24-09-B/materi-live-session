fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(result => console.log(result.products))
    .catch(err => console.log(err))