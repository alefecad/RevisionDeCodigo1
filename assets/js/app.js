const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // se coloca un punto para hacer referencia a una clase
const $b = document.querySelector('.blog'); // se cambia # por un punto para hacer referencia a una clase, ya que estaba parcado como id 
const $l = document.querySelector('.location');

async function displayUser(username) { // para usar await se necesita usar async en la función
  $n.textContent = 'cargando...';
  try { // Se señala un bloque de instrucciones con try 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // cambia la variable a response a un formato .json

    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  } catch (err) { // Se usa catch para resolver la promesa 
    handleError(err); // Se llama a la función a handleError como respuesta si se produce una excepción
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);