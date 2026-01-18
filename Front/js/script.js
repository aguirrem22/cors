const lista = document.getElementById("character-list");
const API = "http://localhost:3000/characters";

function searchCharacter() {
    const input = document.getElementById("search-input");
    const name = input.value.trim();

    if (name === "") {
        alert("Escribe un nombre de personaje");
        return;
    }


    lista.innerHTML = "";

    fetch(`${API}/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(character => {                       
                const listItem = document.createElement('li');

                const nameitem = document.createElement('p');
                const speciesitem = document.createElement('p');
                const status = document.createElement('p');
                const gender = document.createElement('p');
                const origin = document.createElement('p');

                nameitem.textContent = 'Name: ' + character.name;
                speciesitem.textContent = 'Species: ' + character.species;
                status.textContent = 'Status: ' + character.status;
                gender.textContent = 'Gender: ' + character.gender;
                origin.textContent = 'Origin: ' + character.origin.name;

                const characterImage = document.createElement('img');
                characterImage.src = character.image;

                listItem.appendChild(characterImage);
                listItem.appendChild(nameitem);
                listItem.appendChild(speciesitem);
                listItem.appendChild(status);
                listItem.appendChild(gender);
                listItem.appendChild(origin);
                lista.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            lista.innerHTML = "<li>No se encontraron personajes</li>";
        });
}
