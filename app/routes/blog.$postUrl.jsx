import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link
} from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import {formatearFecha} from '~/utils/helpers'


export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Blog No Encontrado",
    });
  }

  return post;
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
        title: "GuitarLA - Blog No Encontrado",
        descripcion: "Guitarras venta de guitarras, Blog no encontrada",
      },
    ];
  }

  return [
    {
      title: `GuitarraLA - ${data.data[0].attributes.titulo}`,
      descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
    },
  ];
}

const Post = () => {
  const post = useLoaderData();
  console.log("🚀 ~ Post ~ post:", post)
  const { titulo, contenido, imagen, publishedAt } = post?.data[0].attributes;

  return (
    <main className="contenedor post mt-3">
      <img className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen de la blog ${titulo}`}
      />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </main>
  );
};

export default Post;
