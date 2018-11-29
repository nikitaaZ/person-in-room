const HTML = document.getElementsByClassName("app")[0];
const GRID_LENGTH = 7;
let PLAYER_POSITION = [0,0]

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

let GoLeft = () => {
    if(PLAYER_POSITION[1] > 0){
        --PLAYER_POSITION[1];
    }
    
}

let GoUp = () =>{
    if(PLAYER_POSITION[0] > 0){
        --PLAYER_POSITION[0];
    }
    
}

let GoDown = () =>{
    if(PLAYER_POSITION[0] < GRID_LENGTH -1){
        ++PLAYER_POSITION[0];
    }
    
}

let GoRight = () =>{
    if(PLAYER_POSITION[1] < GRID_LENGTH - 1){
        ++PLAYER_POSITION[1];
    }
    
}

let Rotate_Player = (side = 0) =>{
    let player_img = document.getElementsByClassName("player")[0];
    let deg = side*90;
    player_img.style.transform = "rotate("+deg+"deg)";
}

Draw_Grid(GRID_LENGTH);
Draw_Player(PLAYER_POSITION);

addEventListener("keydown", function(e){
    switch(e.keyCode){
        case 37: //left
            GoLeft();
            break;
        case 38: //up
            GoUp();
            break;
        case 39: //right
            GoRight();
            break;
        case 40: //down
            GoDown();
            break;
    }
    Draw_Player(PLAYER_POSITION);
    Rotate_Player(e.keyCode - 36);
});

