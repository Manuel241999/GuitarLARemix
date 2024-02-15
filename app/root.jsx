import { useState, useEffect } from "react";
import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";
//Nota: el ~ te ayuda a renderizar todo mejor y se basa en el archivo jsconfig.json
import styles from "~/styles/index.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { mensajeToast } from "./models/toast";

export function meta() {
  return [
    {
      title: "GuitarLa - Remix",
      description: "Venta de guitarras, blog de música",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet", //estilos mios css
      href: "https://cdn.jsdelivr.net/npm/toastify-js",
    },
    {
      rel: "stylesheet", //estilos mios css
      href: styles,
    },
  ];
}

export default function App() {
  //Window es el navegador, esque esto arregla un clavo porque localstorage no se puede ejecutar en el servidor, solo en el cliente
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];

  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    //evitar elementos duplicados:
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //Iterar sobre el arreglo, e identificar el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //Reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado); //Literal sustituis el array viejo por el nuevo
      mensajeToast()
      
    } else {
      //Registro Nuevo
      setCarrito([...carrito, guitarra]); //Agregacion de elementos

      mensajeToast()
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
