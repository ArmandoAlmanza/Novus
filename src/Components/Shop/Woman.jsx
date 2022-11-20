const Woman = () => {
    const uri =
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80";
    const desc =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error repellat explicabo deleniti modi fugit, veniam laboriosam, beatae minus inventore similique qui esse. Voluptatibus magnam fuga doloribus, praesentium natus possimus.";
    const products = [
        {
            index: 1,
            name: "Pants super cool",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
            desc: desc,
            price: 39.99,
        },
        {
            index: 2,
            name: "Vestido bonita",
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
            desc: desc,
            price: 89.99,
        },
        {
            index: 3,
            name: "Sudadera y pantalon negro",
            image: "https://images.unsplash.com/photo-1578776691547-8cc984f5d3f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            desc: desc,
            price: 69.99,
        },
        {
            index: 4,
            name: "Vestido colorido",
            image: "https://images.unsplash.com/photo-1548549557-dbe9946621da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 59.99,
        },
        {
            index: 5,
            name: "Sudadera Y Short",
            image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            desc: desc,
            price: 29.99,
        },
        {
            index: 6,
            name: "Conjuntito fresco",
            image: "https://images.unsplash.com/photo-1549062573-edc78a53ffa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 39.99,
        },
        {
            index: 7,
            name: "Playera y short ",
            image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            desc: desc,
            price: 29.99,
        },
        {
            index: 8,
            name: "Playera y pantalon ",
            image: "https://images.unsplash.com/photo-1583396060233-3d13dbadf242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
                                    <button className="btn__primary btn__bag">
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
