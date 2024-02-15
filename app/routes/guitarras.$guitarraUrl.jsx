import { useState } from "react";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
  useOutletContext
} from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
    });
  }

  return guitarra;
}

//**Manejo de errores**/
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
        <p className="error">
          {error.status} {error.statusText} {''}
          <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal</Link>
        </p>

    );
  }
  return <p className="error">Error Desconocido</p>
}

export function meta({ data }) {
  //Una vez que el loader tenga datos y lo pase al componente este "data" va estar disponible
  if (!data) {
    return [
      {
        title: "GuitarLA - Guitarra No Encontrada",
        descripcion: "Guitarras venta de guitarras, guitarra no encontrada",
      },
    ];
  }

  return [
    {
      title: `GuitarraLA - ${data.data[0].attributes.nombre}`,
      descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
    },
  ];
}

const Guitarra = () => {
  const {agregarCarrito} = useOutletContext()
  const [cantidad,setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
 

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      alert('Debes de seleccionar una cantidad')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen:imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <div className=" guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>

          <select  
          onChange={e => setCantidad(+e.target.value)}
          id="cantidad"
          >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value='Agregar al Carrito' 
          />

        </form>
      </div>
    </div>
  );
};

export default Guitarra;
