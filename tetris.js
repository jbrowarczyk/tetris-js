const canvas = document.querySelector('.tetris-canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
const BLACK = 'rgb(0, 0, 0)';
const GREY = 'rgb(128, 128, 128)' 
const WUT = 'rgb(127, 127, 0)';
ctx.fillStyle = BLACK;
ctx.fillRect(0, 0, width, height);


const PLAYFIELD_HEIGHT_BLOCKS = 24
const PLAYFIELD_WIDTH_BLOCKS = 10

const BLOCK_SIZE = 25;
const BLOCK_PADDING = 2;

const TETROMINO_A = [[1, 1, 1, 1],
                     [0, 0, 0, 0],
	                 [0, 0, 0, 0],
	                 [0, 0, 0, 0]]

const TETROMINO_B = [[1, 0, 0],
	                 [1, 1, 1],
	                 [0, 0, 0]]

const TETROMINO_C = [[0, 0, 1],
	                 [1, 1, 1],
	                 [0, 0, 0]]

const TETROMINO_D = [[0, 1, 1, 0],
	                 [0, 1, 1, 0],
	                 [0, 0, 0, 0],
                     [0, 0, 0, 0]]

const TETROMINO_E = [[0, 1, 1],
	                 [1, 1, 0],
	                 [0, 0, 0]]

const TETROMINO_F = [[0, 1, 0],
	                 [1, 1, 1],
	                 [0, 0, 0]]

const TETROMINO_G = [[1, 1, 0],
	                 [0, 1, 1],
	                 [0, 0, 0]]


function get_rotated_value(tetromino, i, j, rotation){
    const tetromino_size = tetromino.length
    if(rotation == 0){
        iNew = i;
        jNew = j;
    } else if(rotation == 1){
        iNew = j;
        jNew = tetromino_size-i-1;
    } else if(rotation == 2){
        iNew = tetromino_size-i-1;
        jNew = tetromino_size-j-1; 
    } else if(rotation == 3){
        iNew = tetromino_size-j-1;
        jNew = i;
    }
    return tetromino[iNew][jNew];
}

function render_tetromino(tetromino, startx, starty, rotation){
    const tetromino_size = tetromino.length;
    ctx.fillStyle = WUT;
    for(let i = 0; i < tetromino_size; i++){
        for(let j = 0; j < tetromino_size; j++){
            if(get_rotated_value(tetromino, i, j, rotation)  == 1){
                ctx.fillRect(
                    startx + (BLOCK_SIZE + BLOCK_PADDING)*j,
                    starty + (BLOCK_SIZE + BLOCK_PADDING)*i,
                    BLOCK_SIZE,
                    BLOCK_SIZE)
            }
        }
    }
}

/*function render_playfield(n_blocks_width, n_blocks_height, block_size, block_color){
    for(let i = 0; i < n_blocks_height; i++){
        for(let j = 0; j < n_blocks_width; j++){
            if(i == 0 || i == +n_blocks_height-1 || j == 0 || j == +n_blocks_width-1){
                ctx.fillStyle = block_color;
                ctx.fillRect(
            }
        }
    }
}*/

let t = TETROMINO_D;

render_tetromino(t, 0, 0, 0);
render_tetromino(t, 100, 100, 1);
render_tetromino(t, 500, 500, 2);
render_tetromino(t, 600, 600, 3);
