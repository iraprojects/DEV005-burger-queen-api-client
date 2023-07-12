export const deleteWorker = async (workerId) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`http://localhost:8080/users/${workerId}`, {
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