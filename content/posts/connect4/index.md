---
path: "/Connect4"
cover: "./logo.png"
date: "2021-03-10"
title: "Connect4"
published: true

---
#Creating the AI for connect four

<hr>

Connect Four is a tic-tac-toe variant played on a grid. Players alternate turns dropping coins into one of the seven different columns. 

As the name implies, the goal of Connect Four is to get four of your colored coins in a row, either horizontally, diagonally, or vertically. The first player to do so wins. If all locations are filled without a player getting four in a row, the game is a draw.

For my code purposes, I have used a starter code that has the connect 4 game implemented. My job is to build an AI that can beat human and other computer opponents. 

Since even a simple minimax player can play perfectly given unlimited time, here my task would be to create a player that can work in limited time conditions. During game play, the AI would have to select a move within a given time frame.


###My Eval function

I ordered the terminal states in the same way as the true utility function. I.e. two in a row is less than three in a row and three in a row is significantly less than four in a row. On top of that, I have taken into account that dropping the coin near the center is the more optimal move since it would open up the board and allow for more ways to win. Also, my evaluation function takes the position of row into consideration. The reason I did this is because let’s say the opponent has three in a row on row 0 with a space to the right and I have three in a row on top of his coins. In this case, the opponent would only need one move to win and I would need two. If I don’t take the row position into account, the eval function would consider they have the same values, which isn’t true. To give the evaluation function a more accurate estimation, I added different weights in front of the features. Vertical < Horizontal = Diagonals. My evaluation function is strongly correlated with the actual chances of winning. In terms of time, my evaluation function would not take too long since it would basically traverse through the board and do different O(1) operations to calculate the cost. 

My evaluation function:

- It only evaluates possible winners. If the coin path is blocked, it would not consider such a path as valid, thus won’t be taken into account in the evaluation.
- We calculate both player 1’s score and player 2’s score. Depending on the active player, the evaluation function  will return the difference between the two scores as the final evaluation score.
- row = current row position
- score  = player’s score
- Scoring distribution:
Center = score + 30 - (row*5)
Center off 1 = score + 15 - (row*5)
Center off 2 = score + 5 - (row*5)
Other columns  =  score + 2 - (row*5)
Two in a row = score + 5  (*0.8 if vertical)
Three in a row  = score + 15 (*0.8 if vertical)
Winner  = 1000

<br>

Simplified version of my eval function
```
double eval(int [][] 2d_array) { 
    double eval_1 = 0.00; 
    double two_in_a_row = 5; 
    double three_in_a_row = 15; 
    double winner = 1000; 
    double eval_1 = 0; 
    for (int col = 0; col < game.getWidth(); col++) { 
        for (int row = 0; row < game.getHeight(); row++) {
            if(2d_array[col][row] == 1){
            eval_1 += position_score(col, row)
            eval_1 += vertical_score(2d_array,col, row)
            eval_1 += diagonal_score(col, row)
            eval_1 += 0.8*horizontal_score(col, row)
            }else if(2d_array[col][row] == 2){
            eval_2 += position_score(col, row)
            eval_2 += vertical_score(2d_array,col, row)
            eval_2 += diagonal_score(col, row)
            eval_2 += 0.8*horizontal_score(col, row)
            }
        }
    }
    if(current_active_player ==1){
        return eval_1 - eval_2;
    }
    return eval_2 - eval_1;
}
```
<br>

Worked out example
<br>

<img src = "https://i.ibb.co/5nJD6nt/Screen-Shot-2021-03-30-at-12-27-37-AM.png" width=650px align-items ="center">

<em> Current active player is Red </em>

Red:

Position score: 15+15-5+30+30-10+30-15+15+5-15 = 95
| Vertical score: 5*0.8 + 5*0.8 = 8
| Diagonal score: 5 + 5 = 10
| Total red score: 113

Yellow:

Position score: 5+30-5+15-5+5+5-5+5-10 = 40
| Horizontal score: 15
| Total yellow score: 65

Total evaluation score returned: 113 - 65 = 48

<em> Since the active player is red, the function returns the red score - yellow score. If the active player is yellow, it will return the yellow score - red score. </em>


<br>

###Minimax

<a href="https://github.com/rayngan999/Connect4AI/blob/main/MyAI_minimax.java"> My Minimax AI </a>

Results:
Won 100% against MonteCarloAI, RandomAI, and Stupid AI in the span of 40 games. Used minimax as both p1 and p2.


<br>

###Alpha Beta Pruning

Implementing the alpha-beta pruning. Here I need to generate a successor function that will order moves to ensure that the best case situation will occur. 

My successor function will order the moves with the best move first from the perspective of the current player. That way if Max sees the biggest V first, it would give it the greatest chance to terminate the loop. Similarly, if the Min sees the smallest V first, it would give it the greatest chance to terminate the loop. To be able to do this, I implemented the alpha beta pruning algorithm and a successor function that ensure I get the best move for the current player first. In this successor function, I used a custom class <em>EvalValue</em> and a PriorityQueue <em>EvalValue</em>. The <em>EvalValue</em> class contains the action move, the current player, and the evaluation value. When we loop through all possible moves, it will create a new <em>EvalValue</em> e. Then it will set e’s action to current move, e’s player to current player, and e’s value to the evaluation score of the current game using this move. After, the function will add this e to the PriorityQueue, and it will put the best moves first depending on the current player. If the current player is max, the PriorityQueue will have the max evaluation value move first. If the current player is min, the PriorityQueue will have the min evaluation value move first. After we call this successor function, we can simply loop through the PriorityQueue and get its action in order it was arranged.


<a href="https://github.com/rayngan999/Connect4AI/blob/main/MyAI_minimax.java"> My Alpha Beta Pruning AI </a>

Results:
Won 100% against MonteCarloAI in the span of 20 games. Used alpha beta pruning AI as both p1 and p2.

<br>

###To Run the Connect 4 program and my AI

The Connect Four program has several different command-line switches that you can use to control how the game is played. By default, the two players are human-controlled. You can choose which AI modules to use by using the -p1 and -p2 switches to select the AIModules to use as the first and second player. For example, to pit the RandomAI player against the MonteCarloAI player, you could use:

'java Main -p1 RandomAI -p2 MonteCarloAI'

Any unspecified players will be filled in with human players.

<a href="https://github.com/rayngan999/Connect4AI
"> Github Link </a>
