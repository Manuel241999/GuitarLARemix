import {Outlet,useOutletContext} from '@remix-run/react'
import styles from '~/styles/guitarras.css'


export function links(){//Este styles va a afectar al componente de Guitarra porque en él estan todas las clasesNames
  return[
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

const Tienda = () => {
 

  return (
    <>
    <Outlet 
    context={useOutletContext()}
    />
    </>
  )
}

export default Tienda