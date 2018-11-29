let FIELD = [];
const HTML = document.getElementsByClassName("app")[0];
const GRID_LENGTH = 7;
let PLAYER_POSITION = [1,1]

let Init_Grid = (grid_length = 7, player_pos = [0,0]) => {
    for(let i = 0; i < grid__length; i++){
        FIELD[i] = [];
        for(let j = 0; j < grid_length; j++){
            if(i === player_pos[0] && j === player_pos[1]){
                FIELD[i][j] = 1;
            }
            else{
                FIELD[i][j] = 0;
            }
        }
    }
}

let Draw_Grid = (grid_length = 7) => {
    for(let i = 0; i < grid_length; i++){
        for(let j = 0; j < grid_length; j++){
            HTML.innerHTML += '<div class="grid-element"></div>';
        }
    }
}

let Draw_Player = (player_pos = [0,0]) => {
    let position = player_pos[0]*7 + player_pos[1]*1;
    let cell = document.getElementsByClassName("grid-element")[position];
    let current_player = document.getElementsByClassName("player")[0];
    if(current_player){
        current_player.parentNode.removeChild(current_player);
    }
    cell.innerHTML += '<img class="player" src="person.png">';
    
}

let Goleft = () =>{
    if(PLAYER_POSITION[1] > 0){
        --PLAYER_POSITION[1];
    }
    
}

let Goup = () =>{
    if(PLAYER_POSITION[0] > 0){
        --PLAYER_POSITION[0];
    }
    
}

let Godown = () =>{
    if(PLAYER_POSITION[0] < GRID_LENGTH -1){
        ++PLAYER_POSITION[0];
    }
    
}

let Goright = () =>{
    if(PLAYER_POSITION[1] < GRID_LENGTH - 1){
        ++PLAYER_POSITION[1];
    }
    
}

Draw_Grid(GRID_LENGTH);
Draw_Player(PLAYER_POSITION);

addEventListener("keydown", function(e){
    switch(e.keyCode){
        case 37: //left
            Goleft();
            break;
        case 38: //up
            Goup();
            break;
        case 39: //right
            Goright();
            break;
        case 40: //down
            Godown();
            break;
    }
    Draw_Player(PLAYER_POSITION);
});

