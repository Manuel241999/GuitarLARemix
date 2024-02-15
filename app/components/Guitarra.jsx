import { Link } from "@remix-run/react";

const Guitarra = ({guitarra}) => {
   // const {descripcion, imagen, precio, url, nombre} = guitarra.attribute
   //console.log(guitarra.attributes.imagen.data.attributes.formats.medium.url);
  return (
    <div className="guitarra">
        <img src={guitarra.attributes.imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra${guitarra.attributes.nombre}`} />
        <div className="contenido">
            <h3>{guitarra.attributes.nombre}</h3>
            <p className="descripcion">{guitarra.attributes.descripcion}</p>
            <p className="precio">${guitarra.attributes.precio}</p>

            <Link className="enlace" to={`/guitarras/${guitarra.attributes.url}`}>Ver Producto</Link>
        </div>    
    </div>
  )
}

export default Guitarra