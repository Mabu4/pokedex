
let currentPokemon;
let pokemonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
'17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33',
'34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', 
'51', '52', '53', '54', '55', '56', '57', '58', '59', '60'];
let pokemons = [];
let maxLoadNumber = 20;
let minLoadNumber = 0;


async function loadPokemon(){
    for (let i = 0; i < pokemonNames.length; i++) {
        const pokemonName = pokemonNames[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemons.push(currentPokemon);
    }
    renderPokemonList();
}


function renderPokemonList(){
    for (let i = minLoadNumber; i < maxLoadNumber; i++) {
        const element = pokemons[i];
        
        document.getElementById('pokemonList').innerHTML += /*html*/`
        <div onclick="renderPokemonInfo(${i})" class="pokemon-list-element" id="pokemon-list-element-${i}">
            <div class="pokemon-stats">
                <h2 id="pokemonName-list">${element['name']}</h2>
                <h3 class="pokemon-firstclass">${element['types']['0']['type']['name']}</h3>
                <span id="pokemon-secondclass-${i}"></span>
            </div>
            <img class="pokemon-list-image" id="pokemonImage-list" src="${element['sprites']['other']['home']['front_default']}">
        </div>
        `;
        chooseColorByType(i, 'list');
        checkForSecondType(i, 'list');
        showButton();
    }  
}


function chooseColorByType(i, section){
        let pokemon = pokemons[i];
        let type = pokemon['types']['0']['type']['name'];
        if(type == 'grass'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = 'green';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, green 80%, white 80%)';
            }
        }
        if(type == 'fire'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = 'red';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, red 80%, white 80%)';
            }
        }
        if(type == 'water'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = 'blue';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, blue 80%, white 80%)';
            }
        }
        if(type == 'bug'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#FB8500';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #FB8500 80%, white 80%)';
            }
        }
        if(type == 'normal'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#B08968';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #B08968 80%, white 80%)';
            }
        }
        if(type == 'poison'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#9B5DE5';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #9B5DE5 80%, white 80%)';
            }
        }
        if(type == 'ground'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#D4A276';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #D4A276 80%, white 80%)';
            }
        }
        if(type == 'electric'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#FFD100';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #D4A276 80%, white 80%)';
            }
        }
        if(type == 'fairy'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#f2b5d4';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #f2b5d4 80%, white 80%)';
            }
        }
        if(type == 'fighting'){
            if(section == 'list'){
            document.getElementById('pokemon-list-element-' + i).style.backgroundColor = '#BC4B51';
            } 
            if(section == 'view') {
            document.getElementById('pokemon-view-inner').style.backgroundImage = 'linear-gradient(to bottom, #BC4B51 80%, white 80%)';
            }
        } 
}


function checkForSecondType(i, section){
    if(pokemons[i]['types']['1']) {
        if(section == 'list'){
            document.getElementById('pokemon-secondclass-' + i).innerHTML = `
            <h3>
                ${pokemons[i]['types']['1']['type']['name']}
            </h3>
            `;
        }
        if(section == 'view'){
            document.getElementById('pokemon-view-secondclass').innerHTML = `
            <div class="pokemon-view-class pokemon-view-class-2">
                ${pokemons[i]['types']['1']['type']['name']}
            </div>
            `;
        }
        
    }
}


function showButton(){
    document.getElementById('button-container').classList.remove('d-none');
}


function showMorePokemons(){
    minLoadNumber = minLoadNumber + 20;
    maxLoadNumber = maxLoadNumber + 20;
    if (maxLoadNumber <= 60){
        renderPokemonList();
    }
    if (maxLoadNumber == 60){
        document.getElementById('button-container').style.display = 'none';
    }
}


function renderPokemonInfo(number){
    let pokemon = pokemons[number];
    document.getElementById('pokemon-view').classList.remove('d-none');
    document.getElementById('pokemon-view').innerHTML = renderPokemonInfoHTML(pokemon, number) /*html*/
    chooseColorByType(number, 'view');
    checkForSecondType(number, 'view');
}


function renderPokemonInfoHTML(pokemon, number){
return `
<div class="pokemon-view-inner" id="pokemon-view-inner">
    <div class="pokemon-view-container-1">
        <div class="header-images">
            <img onclick="closePokemonInfo()" class="arrow-image" src="./img/arrow.png">
            <img class="heart-image" src="./img/heart.png">
        </div>
        <div class="pokemon-view-box-1">
            <h1 class="pokemonName-view">${pokemon['name']}</h1>
            <h2># <span class="pokemon-view-id">${pokemon['id']}</span></h2>
        </div>
        <div class="pokemon-view-box-2">
            <div class="pokemon-view-class">${pokemon['types']['0']['type']['name']}</div>
            <span id="pokemon-view-secondclass"></span>
        </div>
        <div class="pokemon-Image-container">
            <div onclick="lastPokemon(${number})" class="arrow-img-box">
                <img class="arrow-img arrow-img-left" src="./img/arrow-white-left.png">
            </div>
            <div class="pokemonImage-view-box-3">
                <img class="pokemonImage-view" src="${pokemon['sprites']['other']['home']['front_default']}">
            </div>
            <div onclick="nextPokemon(${number})" class="arrow-img-box">
                <img class="arrow-img arrow-img-right" src="./img/arrow-white-right.png">
            </div>
        </div>
    </div>
    <div class="pokemon-view-container-2">
        <div class="pokemon-view-box-4" id="pokemon-view-box-4">
            <div class="pokemon-view-navbar">
                <div onclick="renderPokemonInfo(${number})" class="pokemon-view-navbar-link" id="pokemon-view-navbar-link-1">About</div>
                <div onclick="showStats(${number})" class="pokemon-view-navbar-link" id="pokemon-view-navbar-link-2">Base Stats</div>
            </div>
            <table id="pokemon-view-table">
                <tr>
                    <td>Height</td>
                    <td>${pokemon['height']}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>${pokemon['weight']}</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>${pokemon['abilities']['0']['ability']['name']}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
`;
}


function showStats(number) {
    let pokemon = pokemons[number];
    document.getElementById('pokemon-view-navbar-link-1').style.borderBottom = 'none';
    document.getElementById('pokemon-view-navbar-link-2').style.borderBottom = '2px solid black';
    document.getElementById('pokemon-view-table').innerHTML = showStatsHTML(pokemon) /*html*/
    showStatsResult(number);
    showLines(number);
}


function showStatsHTML(pokemon){
    return `
    <tr>
        <td>HP</td>
        <td>${pokemon['stats']['0']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-0">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Attack</td>
        <td>${pokemon['stats']['1']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-1">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Defense</td>
        <td>${pokemon['stats']['2']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-2">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Sp. Atk</td>
        <td>${pokemon['stats']['3']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-3">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Sp. Def</td>
        <td>${pokemon['stats']['4']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-4">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Speed</td>
        <td>${pokemon['stats']['5']['base_stat']}</td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-5">
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Total</td>
        <td id="pokemon-view-result"></td>
        <td class="stats-third-column">
            <div class="stats-line-outer">
                <div class="stats-line-inner" id="stats-line-inner-result">
                </div>
            </div>
        </td>
    </tr>
`;
}


function showStatsResult(number){
    let pokemon = pokemons[number];
    let result = pokemon['stats']['0']['base_stat'] + pokemon['stats']['1']['base_stat'] + 
                pokemon['stats']['2']['base_stat'] + pokemon['stats']['3']['base_stat'] + 
                pokemon['stats']['4']['base_stat'] + pokemon['stats']['5']['base_stat'];
    document.getElementById('pokemon-view-result').innerHTML = result;

    // Die Linie für das totale Ergebnis

    let resultForLine = (result / 10) * 1.66;
    if(result <= 300){
        document.getElementById('stats-line-inner-result').style.width = `${resultForLine}%`;
        document.getElementById('stats-line-inner-result').style.backgroundColor = 'red';
    } 
    if(result > 300) {
        document.getElementById('stats-line-inner-result').style.width = `${resultForLine}%`;
        document.getElementById('stats-line-inner-result').style.backgroundColor = 'green';
    }
}


function showLines(number){
    let pokemon = pokemons[number];

    for (let i = 0; i < 6; i++) {
        if(pokemon['stats'][`${i}`]['base_stat'] < 50){
            let percent = pokemon['stats'][`${i}`]['base_stat'];
            document.getElementById('stats-line-inner-' + i).style.width = `${percent}%`;
            document.getElementById('stats-line-inner-' + i).style.backgroundColor = 'red';
        } else {
            let percent = pokemon['stats'][`${i}`]['base_stat'];
            document.getElementById('stats-line-inner-' + i).style.width = `${percent}%`;
            document.getElementById('stats-line-inner-' + i).style.backgroundColor = 'green';
        }
    }
}


function nextPokemon(number){
    let newNumber = number + 1;
    if(newNumber < 60){
        renderPokemonInfo(newNumber);  
    }
    if(newNumber == 60){
        let newNumber = 0;
        renderPokemonInfo(newNumber);
    }
}


function lastPokemon(number){
    let newNumber = number - 1;
    if(newNumber >= 0){
        renderPokemonInfo(newNumber);  
    }
    if(newNumber < 0){
        let newNumber = 59;
        renderPokemonInfo(newNumber);
    }
}


function closePokemonInfo() {
    document.getElementById('pokemon-view').classList.add('d-none');
}
