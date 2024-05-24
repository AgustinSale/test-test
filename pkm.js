"use strict";

$("document").ready(function() {




//this.nombre.textContent = `Ditto`;
$(nombre).text("Ditto");
//this.foto.setAttribute("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");
$(foto).attr("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");


/*
    <!--fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data =>{
        console.log(data.count);
        let numPkm = Math.floor(Math.random() * data.count);
        
        document.getElementById("nombre").textContent= capitalizar(data.results[numPkm].name);
        document.getElementById("foto").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.results[numPkm].url.split("/")[6]}.png`;
    })
}
*/

//window.addEventListener("load", reroll);
//document.getElementById("boton").addEventListener("click",reroll);

$(window).on("click", reroll);
reroll();
})

const capitalizar = (nombre) =>{
    let nombreArreglado = "";
    
    nombre.split(`-`).forEach(element => nombreArreglado = `${nombreArreglado} ${element[0].toUpperCase() + element.slice(1)}`);
    
    return nombreArreglado;
    }

const reroll = () => {
    $.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",function(data){
        let numPkm = Math.floor(Math.random() * data.count);

        console.log(data.results[numPkm]);
        $(nombre).text(capitalizar(data.results[numPkm].name));
        $(foto).attr("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.results[numPkm].url.split("/")[6]}.png`)
    })
}