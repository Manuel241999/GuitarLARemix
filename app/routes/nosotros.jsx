import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLa - Sobre Nosotros",
      description: "Venta de guitarras, blog de música",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Nulla eu tempus diam. Sed et aliquet ex, vitae faucibus sem. Aliquam
            posuere est et augue suscipit cursus. Suspendisse fermentum massa
            sit amet gravida rhoncus. Cras accumsan mauris ac iaculis molestie.
            In sed malesuada dui. Integer posuere felis tortor, ac auctor purus
            interdum nec. Pellentesque quis fermentum turpis, a ultricies
            turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum congue non massa id vulputate. Nam dictum vehicula porta.
            Curabitur pulvinar elementum mauris ut efficitur. Suspendisse
            condimentum mi vitae augue mattis vestibulum.
          </p>
          <p>
            Nulla eu tempus diam. Sed et aliquet ex, vitae faucibus sem. Aliquam
            posuere est et augue suscipit cursus. Suspendisse fermentum massa
            sit amet gravida rhoncus. Cras accumsan mauris ac iaculis molestie.
            In sed malesuada dui. Integer posuere felis tortor, ac auctor purus
            interdum nec. Pellentesque quis fermentum turpis, a ultricies
            turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum congue non massa id vulputate. Nam dictum vehicula porta.
            Curabitur pulvinar elementum mauris ut efficitur. Suspendisse
            condimentum mi vitae augue mattis vestibulum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
