import Toastify from 'toastify-js'

export function mensajeToast() {
    Toastify({
        text: "New tweet from @username: This is the tweet content.",
        duration: 5000, // Duración más corta para que parezca una notificación rápida
        close: true,
        gravity: "top", // Puedes cambiar a `bottom` si prefieres
        position: "right", // Puedes cambiar a `left` si prefieres
        style: {
          background: "#1da1f2", // Color de fondo de Twitter
          color: "#fff", // Texto blanco
          borderRadius: "5px", // Bordes redondeados
          boxShadow: "0 2px 5px rgba(0,0,0,.3)", // Sombra
          fontSize: "14px", // Tamaño de fuente
          fontWeight: "bold", // Peso de fuente
          padding: "10px", // Relleno
          minWidth: "200px", // Ancho mínimo
          maxWidth: "300px" // Ancho máximo
        },
        onClick: function(){} // Callback después de hacer clic
      }).showToast();
      
}