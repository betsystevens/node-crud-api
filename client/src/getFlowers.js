function getFlowers() {
  return fetch('http://localhost:4040/flowers/list')
    .then((response) => response.json())
    .then((body) => body.data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default getFlowers;
