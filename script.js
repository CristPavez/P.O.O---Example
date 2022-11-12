// Creamos el objeto Character
class character {
    //Constructor
    constructor(Nombre, Especie, Imagen) {
            this.Nombre = Nombre;
            this.Especie = Especie;
            this.Imagen = Imagen;
        }
        //getter
    get information() {
        let array = [this.Nombre, this.Especie, this.Imagen];
        return array;
    }
}
// Function encargada de inyectar al DOM
// Pasamos la informacion de js al html por medio del div#test
function show(params) {
    //estructura de la card
    let id = document.getElementById("test");
    id.innerHTML += `<div class="card">
    <h3>${params[0]}</h3>
    <p>${params[1]}</p>
    <img width="50%" src="${params[2]}" />
    </div>`;
}
// Function encargada de realizar la peticion al API
async function getPersonas() {
    //Peticion Fetch
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    let persons = data.results;
    //.map de la informacion del api
    persons.map((person) => {
        let people = new character(person.name, person.species, person.image);
        show(people.information);
    });
}

// START - aqui iniciamos todo
getPersonas();