const Woman = () => {
    const uri =
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80";
    const desc =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error repellat explicabo deleniti modi fugit, veniam laboriosam, beatae minus inventore similique qui esse. Voluptatibus magnam fuga doloribus, praesentium natus possimus.";
    const products = [
        {
            index: 1,
            name: "Poncho super cool",
            image: uri,
            desc: desc,
            price: 39.99,
        },
        {
            index: 2,
            name: "Sudadera bonita",
            image: uri,
            desc: desc,
            price: 89.99,
        },
        {
            index: 3,
            name: "Vestido chingon",
            image: uri,
            desc: desc,
            price: 69.99,
        },
        {
            index: 4,
            name: "Blazer fomralon",
            image: uri,
            desc: desc,
            price: 59.99,
        },
        {
            index: 5,
            name: "Ropa chida",
            image: uri,
            desc: desc,
            price: 29.99,
        },
        {
            index: 6,
            name: "Tacones vrgas",
            image: uri,
            desc: desc,
            price: 39.99,
        },
        {
            index: 7,
            name: "Ropa chida",
            image: uri,
            desc: desc,
            price: 29.99,
        },
        {
            index: 8,
            name: "Tacones vrgas",
            image: uri,
            desc: desc,
            price: 39.99,
        },
    ];
    return (
        <section>
            <h2 className="subtitle">See the best woman clothes</h2>

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
                                    <button className="btn btn__bag">
                                        Add to the bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Woman;