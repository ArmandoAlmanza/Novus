const Modal = (props) => {
    const texto = "-----------> Texto de relleno empezando";

    if (!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h2 className="subtitle">Terminos y condiciones</h2>
                </div>
                <div className="modal__body">
                    <p>
                        Esto es un proyecto escolar y no se ocupara el correo
                        que proporcione en la sección de suscripción, no hay
                        manera de que se pueda guardar a decir verdad.
                    </p>
                    <p>
                        Esto es solo para que este tranquilo que sus datos no
                        seran usados... o almacenados siquiera.
                    </p>
                    <p>
                        Disfrute de la pagina y se le dara un texto de relleno
                        para que se vea mucho texto pero no tiene que leer, es
                        en latin.
                    </p>
                    <p className="texto__relleno"> {texto} </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque volutpat ligula vitae convallis luctus.
                        Etiam id pharetra odio, volutpat sollicitudin mi.
                        Praesent pharetra consequat metus, non iaculis ante
                        pretium vel. Etiam sed sodales neque. Praesent commodo
                        ultrices semper. Cras et leo sagittis, euismod orci sed,
                        aliquet turpis. Sed ut interdum odio. Cras eu urna
                        dapibus, malesuada tortor ac, vulputate est. Vivamus
                        quis nisi quam. Duis at arcu id est rhoncus porta.
                        Pellentesque aliquet eleifend gravida. Aliquam tristique
                        finibus leo at feugiat. Maecenas elementum rhoncus
                        lobortis. Nullam consequat, nisl vel molestie
                        ullamcorper, turpis mauris semper nibh, eu dignissim
                        sapien nunc quis risus. Fusce nulla odio, pellentesque
                        nec rutrum vel, rutrum vel leo. Maecenas imperdiet
                        consectetur eros, eu ultrices magna laoreet a. Aliquam
                        quis neque quis ex scelerisque suscipit. Vestibulum
                        varius arcu eget quam imperdiet, at varius magna
                        blandit. Sed vitae hendrerit libero. Praesent porttitor
                        vel libero vestibulum dapibus. Aenean vestibulum auctor
                        nisi, id semper magna faucibus vel. Phasellus tellus
                        nibh, dictum elementum arcu eu, ultrices efficitur
                        justo. Phasellus eget diam at nulla ultrices aliquam.
                        Morbi in efficitur eros, ac molestie nisi. Quisque quis
                        feugiat mauris. Nulla sodales mollis sem eget fermentum.
                        Curabitur id volutpat ligula, in tristique ante.
                        Curabitur felis purus, eleifend sed ante et, lobortis
                        porttitor tortor. Sed luctus arcu in nisl facilisis,
                        vehicula ultricies diam bibendum. Mauris ante magna,
                        pulvinar et convallis eu, elementum ac velit. In hac
                        habitasse platea dictumst. Suspendisse iaculis massa in
                        arcu egestas dignissim. Quisque vel venenatis est, quis
                        bibendum lorem. Quisque interdum ipsum quis massa
                        sagittis tempus. Vivamus vel libero ut eros tempus
                        fringilla quis eget quam. Suspendisse id maximus diam.
                        Cras eget lorem ut ex venenatis tincidunt. Orci varius
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Duis turpis neque, placerat
                        hendrerit augue eget, finibus maximus erat. Mauris mi
                        lorem
                    </p>
                    <p className="end__text">
                        faucibus ac aliquam vel, sodales sed massa. Vestibulum
                        feugiat ut est ut viverra. Nullam quis dictum quam.
                        Aenean maximus egestas lacus, in pulvinar lacus interdum
                        eu.
                    </p>
                </div>
                <div className="modal__footer">
                    <button className="btn btn__modal" onClick={props.onClose}>
                        Aceptar terminos y condiciones
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
