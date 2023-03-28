async function gatosRndoms() {
  try {
    const response = await fetch('https://cataas.com/cat');
    if (!response.ok) {
      throw new Error('La respuesta no fue exitosa');
    }
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  } catch (error) {
    console.error(error);
  }
}