import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(
        initialProducts
    );

    function handleIncreaseClick(productId: number) {
        setProducts(
            products.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product.count + 1,
                    };
                } else {
                    return product;
                }
            })
        );
    }

    // Обработчик для уменьшения количества. 
    // Сначала обновляем массив через map, уменьшая счетчик нужного товара.
    // Затем фильтруем массив, удаляя товары, у которых count стал равен 0.
    function handleDecreaseClick(productId: number) {
        let nextProducts = products.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count - 1,
                };
            } else {
                return product;
            }
        });
        setProducts(nextProducts.filter((p) => p.count > 0));
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                    <button onClick={() => {
                        handleDecreaseClick(product.id);
                    }}>–</button>
                </li>
            ))}
        </ul>
    );
}