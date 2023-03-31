const tea_collections = {
    'The Island of Tea Special': 9.99,
    'Darjeeling ': 14.99,
    'Masala ': 19.99,
    'Radella ': 9.99,
    'Sencha ': 14.99,
    'White Moon ': 19.99
}

function TeaCollection(collection){
    const tea = Object.entries(tea_collections).map(([flavor, price]) => (
        <article className="tea-item">
            <p className="collections-flavor">{flavor}</p><p className="collections-price">$ {price}</p>
        </article>
    ));
    return tea
}

export default function TeaCollections() {
    return(
        <>
            <TeaCollection collection={tea_collections}/>
        </>
    );
}