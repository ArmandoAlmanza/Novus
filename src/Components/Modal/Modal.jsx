import { useState } from "react";
import { texto } from "./text";
const Modal = () => {
    const [show, setShow] = useState(true);
    if (!show) {
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
                    <p>{texto}</p>
                </div>
                <div className="modal__footer">
                    <button
                        className="btn btn__modal"
                        onClick={() => setShow(false)}
                    >
                        Aceptar terminos y condiciones
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
