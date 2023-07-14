export const deleteWorker = async (workerId) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`https://burger-queen-api-mock-production-b29d.up.railway.app/users/${workerId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el user');
    } else {
      console.log('user eliminado correctamente');
    }
  
  } catch (error) {
    console.error('Error:', error);
  }
};