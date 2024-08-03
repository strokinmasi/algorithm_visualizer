# SMALL DEVELOPMENT LOG

This project is a algorithm visualizer for pathfinding algorithms, created to introduce as much customizability to pathfinding algorithms as possible.

With this project I want to simply achieve:

- I want to learn how to setup nice looking UI
- I want to learn the basic algorithms and how they work
- I want to learn to use react and useStates etc
- I want to learn javascript, a very common coding language that can be used for a variety of tasks

## LOGS

July 30th : 

Notes/

this entire project was overhauled from a previously started algorithm visualizer I made, however I was not
happy with my previous attempt and therefore I started over.

Achieved/

I managed to recreate a grid that will be used to display the algorithms, also implemented nodes that will be later
used to create start nodes, wall nodes, end nodes etc.


August 4th :

Notes/

The grid now functions properly and I now want to start implementing the good old dijstra algorithm, a great starting
algorithm which in reality, is just BFS in this non-weighted grid like this. This gives me a possible extension to this
project, to add a weighted graph or grid later.

Achieved/

Each node now will have its visited information through the css colour/class of the node. Dijkstra is starting to work
as well, I have implemented basic operations and tools like a queue, a node identification function and also a function
to add all nodes surrounding a specific node to the queue a huge step for dijkstra.