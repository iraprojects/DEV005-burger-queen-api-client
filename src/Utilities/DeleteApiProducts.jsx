export const deleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`http://localhost:8080/products/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      } else {
        console.log('Producto eliminado correctamente');
      }
    
    } catch (error) {
      console.error('Error:', error);
    }
  };