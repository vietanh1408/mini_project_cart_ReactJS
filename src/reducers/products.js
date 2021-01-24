

/* var data = JSON.parse(localStorage.getItem('CART')) */
var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        rating: 3,
        description: 'Iphone Ngon Bổ Rẻ',
        price: 800
    },
    {
        id: 2,
        name: 'Iphone 12',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg',
        rating: 4,
        description: 'Iphone Ngon Bổ Rẻ',
        price: 1200
    },
    {
        id: 3,
        name: 'Iphone 11',
        image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600-600x600.jpg',
        rating: 2,
        description: 'Iphone Ngon Bổ Rẻ',
        price: 1000
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default products;