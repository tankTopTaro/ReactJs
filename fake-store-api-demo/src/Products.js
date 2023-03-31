import { useState, useEffect } from 'react';

export default function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchProduct(){
            const res = await fetch('https://fakestoreapi.com/products')
            const json = await res.json();
            setData(json);
        }

        fetchProduct();
    }, []);

    function handleClick() {
        console.log('click');
    }

    return (
        <div className='card-container'>
            {data.map(product => (
                <div key={product.id} className='card' onClick={handleClick}>
                    <div className='img-wrap'>
                        <img
                            src={product.image}
                            alt={product.title}/>
                    </div>
                    <div className='card-body'>
                        <h2>{product.title}</h2>
                        <p>$ {product.price}</p>
                        <p>Rating: {product.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}