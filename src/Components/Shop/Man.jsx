const Man = () => {
    const uri =
        "https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    const desc =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error repellat explicabo deleniti modi fugit, veniam laboriosam, beatae minus inventore similique qui esse. Voluptatibus magnam fuga doloribus, praesentium natus possimus.";
    const products = [
        {
            index: 1,
            name: "Poncho super cool",
            image: "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 39.99,
        },
        {
            index: 2,
            name: "Playera re fachera",
            image: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 89.99,
        },
        {
            index: 3,
            name: "Saco mamalon",
            image: "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80",
            desc: desc,
            price: 69.99,
        },
        {
            index: 4,
            name: "Sudadera a tigrada",
            image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 59.99,
        },
        {
            index: 5,
            name: "Ropa chida",
            image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 29.99,
        },
        {
            index: 6,
            name: "Alfajares",
            image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 39.99,
        },
		{
            index: 7,
            name: "Ropa chida",
            image: "https://images.unsplash.com/photo-1582274528667-1e8a10ded835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            desc: desc,
            price: 29.99,
        },
        {
            index: 8,
            name: "Alfajares",
            image: "https://images.unsplash.com/photo-1640447051222-3023288a492b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 39.99,
        }
    ];
    return (
        <div>
            <h2 className="subtitle">See the best man clothes</h2>

            <div className="card__container">
                {products.map((product) => {
                    return (
                        <div className="card" key={product.index}>
                            <div className="card__image">
                                <img src={product.image} alt="poncho" />
                            </div>
                            <div className="card__info">
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <div className="buy__container">
                                    <span className="price">
                                        ${product.price}
                                    </span>
                                    <button className="btn__primary btn__bag">
                                        Add to the bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Man;
