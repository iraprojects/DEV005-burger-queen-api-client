export const deleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`https://burger-queen-api-mock-production-b29d.up.railway.app/products/${productId}`, {
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