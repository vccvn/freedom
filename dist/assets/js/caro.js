var { _class, Dom, Html, Component, Div, P, Button, observe, div, p, h2, h3, Loop, Str, Num, ForEach } = FreeDom;

var CaroGame = Component.maker("CaroGame", {
    $autoRender: true,
    data: {
        boardSize: 10, // Kích thước bàn cờ 10x10
        board: [], // Ma trận lưu trạng thái bàn cờ
        currentPlayer: 'X', // Người chơi hiện tại (X hoặc O)
        winner: null, // Người chiến thắng
        gameOver: false // Trạng thái kết thúc game
    },

    // Khởi tạo bàn cờ
    onInit() {
        this.resetGame();
    },

    // Reset game về trạng thái ban đầu
    resetGame() {
        console.log('resetGame');
        // Khởi tạo ma trận bàn cờ trống
        this.board = Array(this.boardSize).fill(null)
            .map(() => Array(this.boardSize).fill(null));
        this.currentPlayer = 'X';
        this.winner = null;
        this.gameOver = false;
        console.log(JSON.stringify(this));
    },

    // Xử lý khi người chơi đánh một ô
    makeMove(row, col) {
        console.log('makeMove', row, col);
        // Kiểm tra nếu ô đã được đánh hoặc game đã kết thúc
        if (this.board[row][col] || this.gameOver) {
            return;
        }

        // Đánh dấu ô được chọn
        this.board[row][col] = this.currentPlayer;

        // Kiểm tra chiến thắng
        if (this.checkWinner(row, col)) {
            this.winner = this.currentPlayer;
            this.gameOver = true;
            return;
        }

        // Đổi lượt người chơi
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },

    // Kiểm tra người thắng
    checkWinner(row, col) {
        const directions = [
            [[0, 1], [0, -1]], // Ngang
            [[1, 0], [-1, 0]], // Dọc
            [[1, 1], [-1, -1]], // Chéo chính
            [[1, -1], [-1, 1]] // Chéo phụ
        ];

        return directions.some(dir => {
            const count = 1 + // Ô hiện tại
                this.countDirection(row, col, dir[0][0], dir[0][1]) + // Đếm một hướng
                this.countDirection(row, col, dir[1][0], dir[1][1]); // Đếm hướng ngược lại
            return count >= 5;
        });
    },

    // Đếm số quân cờ liên tiếp theo một hướng
    countDirection(row, col, dRow, dCol) {
        const player = this.board[row][col];
        let count = 0;
        let r = row + dRow;
        let c = col + dCol;

        while (
            r >= 0 && r < this.boardSize &&
            c >= 0 && c < this.boardSize &&
            this.board[r][c] === player
        ) {
            count++;
            r += dRow;
            c += dCol;
        }

        return count;
    },

    // Render giao diện game
    builder() {
        return Div('.caro-game', [
            // Tiêu đề và thông tin game
            h2('.game-title', 'Game Cờ Caro'),
            P('.game-info', [
                this.gameOver
                    ? (this.winner
                        ? `Người chơi ${this.winner} chiến thắng!`
                        : 'Hòa!')
                    : `Lượt của người chơi: ${this.currentPlayer}`
            ]),

            // Bàn cờ
            Div('.game-board',
                this.board.map((row, rowIndex) =>
                    Div('.board-row',
                        row.map((cell, colIndex) =>
                            Button('.cell', cell || '', {
                                onClick: `makeMove(${rowIndex}, ${colIndex})`,
                                class: cell ? `cell-${cell.toLowerCase()}` : ''
                            })
                        )
                    )
                )
            ),
            Div(),
            // Nút reset game
            Button('.reset-btn', 'Chơi lại', {
                onClick: 'resetGame()'
            })
        ]);
    }
});

// Thêm styles cho game
var style = document.createElement('style');
style.textContent = `
    .caro-game {
        text-align: center;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .game-title {
        color: #333;
        margin-bottom: 20px;
    }

    .game-info {
        margin-bottom: 20px;
        font-size: 18px;
        color: #666;
    }

    .game-board {
        display: inline-block;
        background: #fff;
        border: 2px solid #333;
        padding: 10px;
    }

    .board-row {
        display: flex;
    }

    .cell {
        width: 40px;
        height: 40px;
        border: 1px solid #999;
        margin: 1px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        background: #fff;
        transition: background-color 0.3s;
    }

    .cell:hover {
        background: #f0f0f0;
    }

    .cell-x {
        color: #e74c3c;
    }

    .cell-o {
        color: #3498db;
    }

    .reset-btn {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background: #2ecc71;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .reset-btn:hover {
        background: #27ae60;
    }
`;
document.head.appendChild(style);

// Khởi tạo game
var game = CaroGame();
document.body.appendChild(game.el); 