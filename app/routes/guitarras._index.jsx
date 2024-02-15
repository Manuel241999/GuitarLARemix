import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/ListadoGuitarras'

export function meta(){
  return[
    {
      title: 'GuitarLA - Tienda de Guitarras',
      description:'GuitarLA - Nuestra colección de guitarras'
    }
  ]
}

export async function loader() {//si es en localhost se escribe en modo IP porque truena
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()
  console.log("🚀 ~ Tienda ~ guitarras:", guitarras)

  return (
    <>
    <ListadoGuitarras 
    guitarras={guitarras}
    />

    </>
  )
}

export default Tienda