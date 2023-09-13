console.log("¡Hola, Node.js!");

function obtenerProductosAleatorios() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((productos) => {
        // Obtener 10 productos aleatorios
        const productosAleatorios = obtenerProductosAleatoriosAleatorios(productos, 10);
        console.log(productosAleatorios);
      });
  }
  
  // Función para obtener productos aleatorios
  function obtenerProductosAleatoriosAleatorios(productos, cantidad) {
    const productosAleatorios = [];
    const copiaProductos = [...productos]; // Clonar la lista de productos para no modificarla
  
    for (let i = 0; i < cantidad; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaProductos.length);
      const productoAleatorio = copiaProductos.splice(indiceAleatorio, 1)[0];
      productosAleatorios.push(productoAleatorio);
    }
  
    return productosAleatorios;
  }
  
  // Llama a la función inicialmente
  obtenerProductosAleatorios();
  
  // Configura la ejecución periódica cada 30 segundos
  setInterval(obtenerProductosAleatorios, 3000); // 30000 milisegundos = 30 segundos
  