let FIELD = [];
const HTML = document.getElementsByClassName("app")[0];
const GRID_LENGTH = 7;
let PLAYER_POSITION = [0,0]

function Init_Grid(grid_length = 7, player_pos = [0,0]){
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


function Draw_Grid(grid_length = 7){
    for(let i = 0; i < grid_length; i++){
        for(let j = 0; j < grid_length; j++){
            HTML.innerHTML += '<div class="grid-element"></div>';
        }
    }
}

function Draw_Player(player_pos = [0,0]){
    let position = player_pos[0]*7 + player_pos[1]*1;
    let cell = document.getElementsByClassName("grid-element")[position];
    cell.innerHTML += '<img src="person.png">';
    
}


Draw_Grid(GRID_LENGTH);
Draw_Player(PLAYER_POSITION);
