import { useState, useEffect } from 'react';

export default function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchProducts(){
            const res = await fetch('https://fakestoreapi.com/products')
            const json = await res.json();
            setData(json);
        }

        fetchProducts();
    }, []);

    return (
        <div className='card-container'>
            {data.map(product => (
                <div key={product.id} className='card'>
                    <div className='img-wrap'>
                        <img
                            src={product.image}
                            alt={product.title}/>
                    </div>
                    <div className='card-body'>
                        <p>{product.title}</p>
                        <p>$ {product.price}</p>
                        <p>Rating: {product.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}