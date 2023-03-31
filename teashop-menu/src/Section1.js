const tea_flavors = {
    'Earl Grey': 2.99,
    'English Breakfast': 3.49,
    'Chai Tea': 3.99,
    'Green Tea': 2.49,
    'Jasmine Tea': 3.99,
    'Peppermint Tea': 2.99
}

function TeaFlavor(collection){
    const tea = Object.entries(tea_flavors).map(([flavor, price]) => (
        <article className="tea-item">
            <p className="tea-flavor">{flavor}</p><p className="tea-price">$ {price}</p>
        </article>
    ));
    return tea
}

export default function Tea() {
    return(
        <>
            <TeaFlavor collection={tea_flavors}/>
        </>
    );
}