import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCursos } from "~/models/cursos.server";
import ListadoGuitarras from "~/components/ListadoGuitarras";
import ListadoPost from "~/components/ListadoPost";
import Curso from "~/components/Curso";
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

 export function links() {
   return [
     {
       rel:'stylesheet',
       href:stylesGuitarras
     },
     {
      rel:'stylesheet',
      href:stylesPosts
    },
    {
      rel:'stylesheet',
      href:stylesCurso
    }
   ]
 }
export async function loader() {
  //Consumo de APIs de manera global y al mismo tiempo todas(segun sea el caso)
  const [guitarras, posts,cursos] = await Promise.all([
    //Esta es la mejor manera para tener performas
    getGuitarras(),
    getPosts(),
    getCursos()
  ]);
  return {
    guitarras:guitarras.data,
    posts:posts.data,
    cursos:cursos.data
  };
}

const Index = () => {
  const { guitarras, posts,cursos } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
        guitarras={guitarras}
        />
      </main>
      <Curso 
      cursos={cursos.attributes}
      />
      <section className="contenedor">
      <ListadoPost
      posts={posts}
      />
      </section>
    </>
  );
};

export default Index;
