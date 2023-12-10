
function postCoords(){
  event.preventDefault();
  inputXElement = document.querySelector(".form-control form-control-lg x");
  inputYElement = document.querySelector(".form-control form-control-lg y");
  let x = parseInt(inputXElement.value);
  let y = parseInt(inputYElement.value);
    fetch('https://cartes.io/api/maps/f9094e06-ef64-490c-b359-c4cbdf7dcafc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category_name: 'food-bank', lat: x, lng: y),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
      console.log("complete")
    });
}
