import React from "react";

const Description = () => {
    return (
        <div className="bg-red-700 text-white p-8 flex flex-col justify-center items-center">
            <h1 className="font-bold mb-4 text-xl md:text-3xl">¡Bienvenidos a Christmas Movies! 🎄✨</h1>
            <p>
                Descubre la magia del cine navideño en un solo lugar. Aquí
                encontrarás una colección de tarjetas con películas navideñas, podrás ingresar en cada una de ellas y encontrar el detalle de la película, su director, el año de estreno, el género, el país de origen, su sinopsis y puntuación.{" "}
                <br />
                Usa nuestros filtros para explorar películas animadas o
                live-action, y comparte tu opinión en la sección de comentarios,
                donde cada usuario puede calificar y aportar su perspectiva.
                <br />
                ¡Prepárate para sumergirte en el espíritu navideño y encontrar
                tu próxima película favorita!
            </p>
        </div>
    );
};

export default Description;
