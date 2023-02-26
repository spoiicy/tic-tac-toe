let gameboard = ['','','','','','','','',''];

let turn = 1;





endgame = () =>{
    if(gameboard[0] == 1 && gameboard[3] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    else if(gameboard[1] == 1 && gameboard[4] == 1 && gameboard[7] == 1 ){
        return 1;
    }
    else if(gameboard[2] == 1 && gameboard[5] == 1 && gameboard[8] == 1 ){
        return 1;
    }
    else if(gameboard[0] == 1 && gameboard[1] == 1 && gameboard[2] == 1 ){
        return 1;
    }
    else if(gameboard[3] == 1 && gameboard[4] == 1 && gameboard[5] == 1 ){
        return 1;
    }
    else if(gameboard[6] == 1 && gameboard[3] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    else if(gameboard[0] == 1 && gameboard[4] == 1 && gameboard[8] == 1 ){
        return 1;
    }
    else if(gameboard[2] == 1 && gameboard[4] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    
    
    else if(gameboard[0] == 1 && gameboard[3] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    else if(gameboard[1] == 1 && gameboard[4] == 1 && gameboard[7] == 1 ){
        return 1;
    }
    else if(gameboard[2] == 1 && gameboard[5] == 1 && gameboard[8] == 1 ){
        return 1;
    }
    else if(gameboard[0] == 1 && gameboard[1] == 1 && gameboard[2] == 1 ){
        return 1;
    }
    else if(gameboard[3] == 1 && gameboard[4] == 1 && gameboard[5] == 1 ){
        return 1;
    }
    else if(gameboard[6] == 1 && gameboard[3] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    else if(gameboard[0] == 1 && gameboard[4] == 1 && gameboard[8] == 1 ){
        return 1;
    }
    else if(gameboard[2] == 1 && gameboard[4] == 1 && gameboard[6] == 1 ){
        return 1;
    }
    else {
        return 0;
    }

}



//placing marker 1 or 0 and setting the gameboard 
//array with correct action

function placeMarker(cell){
    if(cell.textContent == ''){
        if(turn){
            cell.textContent = 1;
            let index = cell.id;
            gameboard[index] = 1;
            turn = 0;
        }
        else{
            cell.textContent = 0;
            let index = cell.id;
            gameboard[index] = 0;
            turn = 1;
        }
    }
}

// display content on gameboard array

const gameBoardContainer = document.querySelector('#game-board');

for(let index = 0; index < gameboard.length;index++){
    
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id',index);
    cell.textContent = gameboard[index];
    gameBoardContainer.appendChild(cell);
    cell.addEventListener('click',function(e){
        placeMarker(cell);
        
        setTimeout(function(){
            if(endgame()){
                alert('game finished');
                location.reload();
            }
        },10);
        
        //on cell click place marker for turn 1 or turn 0
        
    })

    
}


let player = ()=>{
    playerName;

}
    
    


