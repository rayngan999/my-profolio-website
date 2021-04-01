---
path: "/AStarOnTerrainMap"
cover: "./logo.png"
date: "2021-02-20"
title: "AStarOnTerrainMap"
published: true

---
#A* On Terrain Maps
<hr>

Uses A* to devise an algorithm for plotting a course home, minimizing the total cost of the path and the amount of time spent searching.

###Cost Functions    
```
 // Exponential of the height difference  
 public double getCost(final Point p1, final Point p2)
 {
      return Math.exp( (getTile(p2) - getTile(p1)));;
 }

 // New height divided by old height  
 public double getCost(final Point p1, final Point p2)
 {
      return 1.0*getTile(p2) / (getTile(p1) + 1);
 }
 ```

<br>

###Creating Heuristics
For the cost functions above, I have created an admissible heuristic, document the exact form of the heuristic and prove/show it is admissable.

<a href="https://docs.google.com/document/d/1LgY6FImEysZOqloi3CRXOBwGW4KNTFyNGX0MlB0ss34/edit?usp=sharing"> Heuristics Documentation</a>


<br>

### Implementing the Heuristics and A* Algorithm

Here, I first implemented the Dijsktra's algorithm on top of a starter code of the enviorment set up. After I have tested that it is functioning correctly, I then added my heuristics function. With this heuristics function, the agent will evaluate nodes by combining both the path cost and the cost to get from the node to the goal. Since we don't know the exact cost from the node to the goal, we need to have this heuristics function that is always underestimating the true cost

Heuristics function for `Exponential of the height difference`:
```
private double getHeuristic(final TerrainMap map, final Point pt1, final Point pt2){
        double curHeight = map.getTile(pt1);
        double goalHeight = map.getTile(pt2);
        double h = Math.abs(goalHeight - curHeight);
        double d = Math.max(Math.abs(pt2.x-pt1.x),Math.abs(pt2.y-pt1.y));

        if (curHeight > goalHeight){
           return Math.exp(-1)*h +(d-h);
        }
        if (curHeight == goalHeight){
            return d;
        }else{
            if(h > d){
                return(Math.exp(1) * h);
            }
            return (Math.exp(1) * h + (d-h));
        }

    }
```

Code: <a href="https://github.com/rayngan999/AI---Find-Path/blob/main/AStarExp_916458704.java"> A Star implementaition for Div</a>




Heuristics function for `New height divided by old height`:

``` 
private double getHeuristic(final TerrainMap map, final Point pt1, final Point pt2){
        
        double h =  Math.abs(map.getTile(pt2) - map.getTile(pt1));
        double d = Math.max(Math.abs(pt2.x-pt1.x),Math.abs(pt2.y-pt1.y));
      

        if (map.getTile(pt1) == map.getTile(pt2)) {
            return ((double) (map.getTile(pt1)) / ((double) map.getTile(pt1) + 1.0)) * d;
        }
        if (map.getTile(pt1) < map.getTile(pt2)) {
            if (h < d) {
                return h+ ((double) map.getTile(pt2) / ((double) map.getTile(pt2) + 1.0)) * (d - h);
            } else {
                return (double) (map.getTile(pt2)) / ((double) map.getTile(pt1)+ 1.0) + (double) map.getTile(pt2) / ((double) map.getTile(pt2) + 1.0) * (d - 1);
            }
        } else {
    
            if (h < d) {
                return (double) (map.getTile(pt2)) / ((double) map.getTile(pt1) + 1.0)
                        + ((double) (map.getTile(pt2)) / ((double) map.getTile(pt2) + 1.0)) * (d - 1);
            } else {
                return (double) (map.getTile(pt2)) / ((double) map.getTile(pt1) + 1.0) + ((double) (map.getTile(pt2)) / ((double) map.getTile(pt2) + 1.0)) * (d - 1);
            }
        }
        
    }
```

Code: <a href="https://github.com/rayngan999/AI---Find-Path/blob/main/AStarExp_916458704.java"> A Star implementaition for Exp</a>





<br>

##Exponential of the height difference

Dijsktra's algorithm 
<br>

<img src ="https://raw.githubusercontent.com/rayngan999/AI---Find-Path/main/Pic/Screen%20Shot%202021-01-28%20at%206.25.45%20PM.png" width="100%">

A* algorithm
<br>

<img src ="https://raw.githubusercontent.com/rayngan999/AI---Find-Path/main/Pic/Screen%20Shot%202021-02-05%20at%201.04.36%20PM.png" width="100%">


##New height divided by old height:

Dijsktra's algorithm 
<br>

<img src ="https://raw.githubusercontent.com/rayngan999/AI---Find-Path/main/Pic/Screen%20Shot%202021-01-28%20at%206.24.42%20PM.png" width="100%">

A* algorithm
<br>

<img src ="https://raw.githubusercontent.com/rayngan999/AI---Find-Path/main/Pic/Screen%20Shot%202021-02-02%20at%2012.52.07%20AM.png" width="100%">



##Results
```Div:
Seed 1
PathCost, 198.59165501141644, Uncovered, 1004, TimeTaken, 25

Seed 2
PathCost, 198.56141550095256, Uncovered, 1004, TimeTaken, 19

Seed 3
PathCost, 198.4864317411443, Uncovered, 1004, TimeTaken, 22

Seed 4
PathCost, 198.70066424826052, Uncovered, 1004, TimeTaken, 22

Seed 5
PathCost, 198.25499446810397, Uncovered, 1004, TimeTaken, 22

MtStHelens
PathCost, 548.3684300960452, Uncovered, 106827, TimeTaken, 1079

Exp:
Seed 1 
PathCost, 533.4482191461119, Uncovered, 71645, TimeTaken, 2985

Seed 2
PathCost, 549.5036346739352, Uncovered, 81880, TimeTaken, 3445

Seed 3
PathCost, 510.97825243663607, Uncovered, 74001, TimeTaken, 2803

Seed 4
PathCost, 560.6570436319696, Uncovered, 66382, TimeTaken, 2645

Seed 5
PathCost, 479.5879215923168, Uncovered, 67837, TimeTaken, 3020

MtStHelens
PathCost, 515.6645805015318, Uncovered, 119087, TimeTaken, 1957
```

<a href="https://github.com/rayngan999/AStar-Find-Path">Github Link</a>