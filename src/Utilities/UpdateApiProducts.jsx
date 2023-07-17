export const updateProducts = async (productId, newProduct, newPrice, newType) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`https://burger-queen-api-mock-production-b29d.up.railway.app/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newProduct, price: newPrice, type: newType }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el producto');
    } else {
      console.log('Producto editado correctamente');
    }

    // Aquí puedes realizar alguna acción adicional después de actualizar los datos,
    // como refrescar la lista de productos.

  } catch (error) {
    console.error('Error:', error);
  }
};