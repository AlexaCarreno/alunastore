const productos = [
  { id: 1, nombre: "Blusa Rosa", precio: 45000 },
  { id: 2, nombre: "Vestido Largo", precio: 85000 },
  { id: 3, nombre: "Jean Skinny", precio: 60000 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarProductos() {
  const contenedor = document.getElementById('productos-container');
  if (!contenedor) return;
  productos.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `<h4>${prod.nombre}</h4><p>$${prod.precio}</p><button onclick="agregarAlCarrito(${prod.id})">Agregar</button>`;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
}

function mostrarCarrito() {
  const contenedor = document.getElementById('carrito-container');
  if (!contenedor) return;
  contenedor.innerHTML = '';
  let total = 0;
  carrito.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `<h4>${prod.nombre}</h4><p>$${prod.precio}</p>`;
    contenedor.appendChild(div);
    total += prod.precio;
  });
  document.getElementById('total').innerText = `Total: $${total}`;
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarProductos();
  mostrarCarrito();
});